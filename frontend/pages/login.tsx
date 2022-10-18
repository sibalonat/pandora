import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { CenteredTile } from "@/components/Tile/CenteredTile";
import { Tile } from "@/components/Tile/Tile";
import type { NextPage } from "next";
// Input
// Button
// Tile
// CenteredTile

export const Login: NextPage = () => {
    const onSubmit = () => { }

    return <form onSubmit={onSubmit}>
        <CenteredTile header="Login">
            <Input label="Identifier" placeholder="username or email" />
            <Input label="Password" placeholder="password" />
            <Button type="submit">Login</Button>
        </CenteredTile>


    </form>
}