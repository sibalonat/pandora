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
// "header"
// "nav"
// "search"
// "content"
// "sidebar"
// "footer";
const Wrapper = styled.div`
    display: grid;
    gap: 0.1rem;
    color: ${({ theme }) => theme.fonts.regular};
    background-color: ${({ theme }) => theme.background};
    padding: 0.5rem;
    grid-template-areas: 
    "header  nav"
    "search search"
    "content content"
    "footer footer";
    @media(min-width: 500px) {
        grid-template-columns: 1fr 3fr;

    }
    @media(min-width: 960px) {
        grid-template-columns: 1fr 4fr 2fr;
        grid-template-areas: 
        "header search nav"
        "content content content"
        "footer footer footer";
    }

`
const StyledLogo = styled(Logo)`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: start;
    height: 4rem;
    & .logo_full {
        display: none;
    }
    @media(min-width: 560px) {
        & .logo_short {
            display: none;
        }
        & .logo_full {
            display: inline;
        }
    }
    `
    // @media(max-width: 500px) {
    //     justify-content: center;
    // }

const LogoLink = styled(StyledLink)`
    padding-right: 1vw; 
`



    // padding: 0.5rem;
const MainNav = styled.nav`
    grid-area: nav;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 2vmin;
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
            <LogoLink>
                <StyledLogo size={3}>
                    <span className="log_short">mn+</span>
                    <span className="log_full">mnplus</span>
                </StyledLogo>
            </LogoLink>
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