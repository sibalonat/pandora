import styled from "@emotion/styled";
import { Logo } from "@/components/Logo/Logo";
import { Input } from "@/components/Input/Input";
import { FC } from "react";
import Link from "next/link";
import { IconButton } from "@/components/IconButton/IconButton";
import { StyledLink } from "@/components/StyledLink/StyledLink";

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
    @media(min-width: 700px) {
        grid-template-columns: 1fr 4fr 3fr;
        grid-template-areas: 
        "header search nav"
        "nav nav"
        "content content content"
        "footer footer footer";
        nav {
            flex-direction: row;
        }
    }

`
const StyledLogo = styled(Logo)`
    grid-area: header;
    display: flex;
    align-items: center;
    height: 4rem;
    @media(max-width: 500px) {
        justify-content: center;
    }
`



const MainNav = styled.nav`
    grid-area: nav;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem;
    a {
        cursor: pointer;
        color: ${({ theme }) => theme.fonts.regular};
        &:hover {
            opacity: 0.7;
        }
    }
`

const SearchInput = styled(Input)`
    grid-area: search;
    width: 100%;
    height: 4rem;
`

const Content = styled.main`
    grid-area: content;
`

const Footer = styled.footer`
    grid-area: footer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 5rem;
`

type Props = {
    isDark: boolean;
    onThemeToggler: () => void;
}

export const Layout: FC<Props> = ({ children, isDark, onThemeToggler }) => (
    <Wrapper>
        <Link href="/" passHref>
            <StyledLink>
                <StyledLogo size={3}>mn+</StyledLogo>
            </StyledLink>
        </Link>
        <MainNav>
            <Link href="/all">All</Link>
            <Link href="/news">News</Link>
            <IconButton name={isDark ? "Moon" : "Sun"} size={1} onClick={onThemeToggler} />
        </MainNav>
        <SearchInput icon="Search" placeholder="search" onChange={() => null} />
        <Content> {children} </Content>
        <Footer>
            {new Date().getFullYear()} all right for all
        </Footer>
    </Wrapper>
);