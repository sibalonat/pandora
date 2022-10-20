import { StyledLink } from "@/components/StyledLink/StyledLink";
import { Logo } from "@/components/Logo/Logo";
import { Input } from "@/components/Input/Input";
import styled from "@emotion/styled";
// import { Logo } from "@/components/Logo/Logo";
// Input

// StyledLink
// Logo
// styled

export const Wrapper = styled.div`
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

export const LogoLink = styled(StyledLink)`
    padding-right: 1vw; 
`

export const StyledLogo = styled(Logo)`
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


// padding: 0.5rem;
export const MainNav = styled.nav`
    grid-area: nav;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 2vmin;

`
// Input

export const SearchInput = styled(Input)`
    grid-area: search;
    width: 100%;
    height: 4rem;
`

export const Content = styled.main`
    grid-area: content;
`

export const Footer = styled.footer`
    grid-area: footer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 5rem;
`