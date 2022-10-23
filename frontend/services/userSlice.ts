import { 
    createSlice, 
    PayloadAction, 
    createAsyncThunk,
    SerializedError 
} from "@reduxjs/toolkit";

type RequestState = 'pending' | 'fulfilled' | 'rejected'

export type UserState = {
    jwt: string;
    username: string;
    email: string;
    requestSTate?: RequestState;
    error?: SerializedError;
}

export type LoginData = {
    identifier?: string;
    password?: string;
}

type UserPayload = { jwt: string; user: { usename: string; email: string; } }

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
        builder
        .addCase(login.fulfilled, (state, {payload}) => {
            state.requestSTate = 'fulfilled'
            state.jwt = payload.jwt;
            state.username = payload.user.usename;
            state.email = payload.user.email;
            state.error = undefined;
        }).addCase(login.pending, (state) => {
            state.requestSTate = 'pending';
            state.error = undefined;
        }).addCase(login.rejected, (state, {payload}) => {
            state.requestSTate = 'rejected';
            const payloadError = (payload as {error: SerializedError})?.error
            state.error = payloadError;
        })
    }
})

export const { actions, reducer } = userSlice

const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL

const clearUserInfoFromLocalStorage = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('username')
    localStorage.removeItem('email')
}

const setupUSerInfoFromLocalStorage = (result: UserPayload) => {
    localStorage.setItem('jwt', result.jwt)
    localStorage.setItem('username', result?.user?.usename)
    localStorage.setItem('email', result?.user?.email)
}

export const login = createAsyncThunk<UserPayload, LoginData>(
    "user/login",
    async (loginData, { rejectWithValue }) => {
        try {
            const jwt = localStorage.getItem('jwt')
            const response = jwt
                ? await fetch(`${api_url}/users/me`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    },
                    body: JSON.stringify(loginData)
                })
                : await fetch(`${api_url}/auth/local`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginData)
                })

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