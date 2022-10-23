import { Logo } from "@/components/Logo/Logo"
import { StyledLink } from "@/components/StyledLink/StyledLink"
import styled from "@emotion/styled"
import Link from "next/link"


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    height: 83vh;
`

const CustomLink = styled(StyledLink)`
    text-decoration: underline;
    font-size: 3rem;
`

export default function Custom404() {
    return (
        <Wrapper>
            <Logo>404 - Page not found</Logo>
            <Link passHref href="/">
                <CustomLink>Go Home</CustomLink>
            </Link>
        </Wrapper>
    )
}