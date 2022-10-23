import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";


export type UserState = {
    jwt: string;
    username: string;
    email: string;
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
    }
})

export const { actions, reducer } = userSlice

const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL

export const login = createAsyncThunk<UserPayload, LoginData>(
    "user/login",
    async (loginData, {rejectWithValue}) => {
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
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(loginData)
        })

        const data = await response.json()
    }
)