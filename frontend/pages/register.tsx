import { Button } from "@/components/Button/Button";
import { Feedback, Input } from "@/components/Input/Input";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { CenteredTile } from "@/components/Tile/CenteredTile";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
// NextPage
// useForm
// CenteredTile
// styled
// Input
// StyledLink
// Button
// Feedback

const StyledInput = styled(Input)`
    margin-bottom: 1rem;
`

export type RegistrationForm = {
    username: string;
    email: string;
    password: string;
}

const Registration: NextPage = () => {
    const {
        register, handleSubmit, formState: {errors},
    } = useForm<RegistrationForm>()
    
    const onSubmit = (data: RegistrationForm) => {
        console.log(data);
    }
    return <form onSubmit={handleSubmit(onSubmit)}>
        <CenteredTile header='Create Account'>
            <StyledInput 
            label="username" 
            placeholder="User Name" 
            feedback={errors.username ? (<Feedback>{errors.username?.message}</Feedback>) : (<>&nbsp;</>)}
            {...register('username', {
                required: "Required field",
                minLength: {value: 6, message: "Min Length!"},
                pattern: {
                    value: /^[\w\d\s]+$/,
                    message: "Only letters, numbers and spaces"
                }
            })} />
            <StyledInput 
            label="username" 
            placeholder="User Name" 
            feedback={errors.password ? (<Feedback>{errors.password?.message}</Feedback>) : (<>&nbsp;</>)}
            {...register('password', {
                required: "Required field",
                minLength: {value: 6, message: "Min Length!"},
                pattern: {
                    value: /^[\w\d\s]+$/,
                    message: "Only letters, numbers and spaces"
                }
            })} />
        </CenteredTile>
    </form>
}

export default Registration;