import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { CenteredTile } from "@/components/Tile/CenteredTile";
import { Tile } from "@/components/Tile/Tile";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import Link from "next/link";
// Input
// Button
// Tile
// Link
// CenteredTile

const StyledInput = styled(Input)`
    margin-bottom: 1rem;
`

export const Login: NextPage = () => {
    const onSubmit = () => { }

    return <form onSubmit={onSubmit}>
        <CenteredTile header="Login">
            <StyledInput label="Identifier" placeholder="username or email" />
            <StyledInput label="Password" placeholder="password" />
            <Button type="submit">Sign In</Button>
            <h3>
                <Link href="/registration" passHref>
                <StyledLink underline>Create Account</StyledLink>
                </Link>
            </h3>
        </CenteredTile>


    </form>
}