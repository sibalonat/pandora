// import { registration } from '@/services/userSlice';
import { RootState } from '@/store';
// import { login } from './us|erSlice';
import {
    createSlice,
    PayloadAction,
    createAsyncThunk,
    SerializedError
} from "@reduxjs/toolkit";

// import { useSelector, useDispatch } from "react-redux";

type RequestState = 'pending' | 'fulfilled' | 'rejected'

export type UserState = {
    jwt: string;
    username: string;
    email: string;
    requestSTate?: RequestState;
    error?: SerializedError;
}

export type LoginData = {
    identifier: string;
    password: string;
}

export type RegistrationData = {
    username?: string;
    email?: string;
    password?: string;
}

type UserPayload = { jwt: string; user: { username: string; email: string; } }

const initialState: UserState = {
    jwt: '',
    username: '',
    email: ''
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        update: (state, { payload }: PayloadAction<Partial<UserState>>) => ({
            ...state,
            ...payload
        }),
        clear: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(logout.fulfilled, () => initialState)
        builder
            .addMatcher<PayloadAction<UserPayload>>(
                (action) => /\/(login|registration)\/fulfilled$/.test(action.type),
                (state, { payload }) => {
                    state.requestSTate = 'fulfilled';
                    state.jwt = payload.jwt;
                    state.username = payload.user.username;
                    state.email = payload.user.email;
                    state.error = undefined;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.requestSTate = 'pending';
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, { payload }) => {
                    const payloadError = (payload as { error: SerializedError })?.error
                    state.error = payloadError
                    state.requestSTate = 'rejected'
                }
            )
    }
})


export const { actions, reducer } = userSlice

export const selectUser = ({ user }: RootState) => user

const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL

const clearUserInfoFromLocalStorage = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('username')
    localStorage.removeItem('email')
}

const setupUSerInfoFromLocalStorage = (result: UserPayload) => {
    localStorage.setItem('jwt', result.jwt)
    localStorage.setItem('username', result?.user?.username)
    localStorage.setItem('email', result?.user?.email)
}

const createRequest = (
    jwt: string | null,
    loginData: LoginData | undefined
) => {
    if (jwt && !loginData) {
        return fetch(`${api_url}/users/me`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`
            },
            // body: JSON.stringify(loginData)
        });
    }

    if (loginData) {
        return fetch(`${api_url}/auth/local`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });
    }

    throw { error: "Ivalid request" };

}

export const login = createAsyncThunk<UserPayload, LoginData | undefined>(
    "user/login",
    async (loginData, { rejectWithValue }) => {
        try {
            const jwt = localStorage.getItem('jwt')
            const response = await createRequest(jwt, loginData)

            const data = await response.json()
            if (response.status < 200 || response.status >= 300) {
                clearUserInfoFromLocalStorage()
                return rejectWithValue(data)
            }

            const result = (jwt ? { jwt, user: data } : data) as UserPayload

            setupUSerInfoFromLocalStorage(result)

            return result

        } catch (error) {
            clearUserInfoFromLocalStorage()
            return rejectWithValue(error)
        }

    }
)

export const logout = createAsyncThunk('user/logout', async () => clearUserInfoFromLocalStorage())
export const registration = createAsyncThunk<UserPayload, RegistrationData>(
    "user/registration",
    async(data, {rejectWithValue}) => {
        try {
            const response = await fetch(`${api_url}/auth/local/register`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data),
            })
            const result = await response.json()
            if (response.status < 200 || response.status >= 300 ) {
                return rejectWithValue(result)                
            }
            setupUSerInfoFromLocalStorage(result)
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)