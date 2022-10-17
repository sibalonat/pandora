import styled from "@emotion/styled";
import { Logo } from "@/components/Logo/Logo";
import { Input } from "@/components/Input/Input";
import { FC } from "react";
import Link from "next/link";
import { IconButton } from "@/components/IconButton/IconButton";

// styled
// Link
// IconButton
const Wrapper = styled.div`
    display: grid;
    gap: 0.1rem;
    color: ${({ theme }) => theme.fonts.regular};
    background-color: ${({ theme }) => theme.background};
    padding: 0.5rem;
    grid-template-areas: 
    "header"
    "nav"
    "search"
    "content"
    "sidebar"
    "footer";
    @media(min-width: 500px) {
        grid-template-columns: 1fr 3fr;
        grid-template-areas: 
        "header search"
        "nav nav"
        "content content"
        "footer footer";
        nav {
            flex-direction: row;
            justify-content: space-between;
        }
    }

`
const StyledLogo = styled(Logo)`
    grid-area: header;

`
const MainNav = styled.nav`
    grid-area: nav;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem;
    a {
        cursor: pointer;
        color: ${({theme}) => theme.fonts.regular };
        &:hover {
            opacity: 0.7;
        }
    }
`

const SearchInput = styled(Input)`
    grid-area: search;
`

const Content = styled.main`
    grid-area: content;
`

const Footer = styled.footer`
    grid-area: footer;
`

export const Layout: FC = ({ children }) => {
    return (
        <Wrapper>
            <StyledLogo size={3}>mn+</StyledLogo>
            <MainNav>
                <Link href="/all">All</Link>
                <Link href="/news">News</Link>
                <IconButton name="Moon" size={1} onClick={() => null} />
            </MainNav>
            <SearchInput icon="Search" placeholder="search" onChange={() => null} />
            <Content> {children} </Content>
            <Footer>
                {new Date().getFullYear()} all right for all
            </Footer>
        </Wrapper>
    );
}