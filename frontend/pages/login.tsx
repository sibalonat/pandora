import { Button } from "@/components/Button/Button";
// import { Feedback } from "@/components/Input/Feedback/Feedback";
// import { Input, Feedback } from "@/components/Input/Input";
import { Input, Feedback } from "@/components/Input/Input";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { CenteredTile } from "@/components/Tile/CenteredTile";
// import { Tile } from "@/components/Tile/Tile";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
// useForm
// Input
// Button
// Tile
// Link
// Feedback
// CenteredTile

export type LoginForm = {
    identifier: string;
    password: string;
}

const StyledInput = styled(Input)`
    margin-bottom: 1rem;
`

export const Login: NextPage = () => {
    const {
        register, 
        handleSubmit, formState: {errors},
    } = useForm<LoginForm>()
    const onSubmit = (data: LoginForm) => { 
        console.log(data);
    }

    return <form onSubmit={ handleSubmit(onSubmit)}>
        <CenteredTile header="Login">
            <StyledInput 
            label="Identifier" 
            placeholder="username or email"
            height={7}
            feedback={errors.identifier ? <Feedback>Min length 6</Feedback> : <>&nbsp;</>}
            {...register("identifier", {
                required: true,
                minLength: 6
            })} />
            <StyledInput 
            height={7}
            label="Password" 
            feedback={errors.password ? <Feedback>Min length 6</Feedback> : <>&nbsp;</>}
            placeholder="password"
            {...register("password", {
                required: true,
                minLength: 6
            })}/>
            <Button type="submit">Sign In</Button>
            <h3>
                <Link href="/registration" passHref>
                <StyledLink underline>Create Account</StyledLink>
                </Link>
            </h3>
        </CenteredTile>


    </form>
}