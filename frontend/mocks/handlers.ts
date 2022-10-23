import { LoginData, RegistrationData } from './../services/userSlice';
import { rest } from "msw";

// LoginData

const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL

const ValidationError = {
    error: {
        status: 400,
        name: "ValidationError",
        message: "Invalid Identifier or Password",
        details: {}
    }
}

// export const handlers = [
//     rest.post<LoginData>(`${api_url}/auth/local` , (req, res, ctx) => {
//         const data = req.body
//         if (data.identifier === mockupuse) {
            
//         } else {
            
//         }


//     })
// ]