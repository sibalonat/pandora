import styled from "@emotion/styled";

import { FC } from "react";
import Link from "next/link";
import { IconButton } from "@/components/IconButton/IconButton";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { 
    Wrapper,
    StyledLogo,
    LogoLink,
    MainNav,
    SearchInput,
    Content,
    Footer,

} from "./components";

// styled
// Link
// IconButton
// "header"
// "nav"
// "search"
// "content"
// "sidebar"
// "footer";
// Wrapper
// Logo





// @media(max-width: 500px) {
//     justify-content: center;
// }


type Props = {
    isDark: boolean;
    onThemeToggler: () => void;
}

export const Layout: FC<Props> = ({ children, isDark, onThemeToggler }) => (
    <Wrapper>
        <Link href="/" passHref>
            <LogoLink>
                <StyledLogo size={3}>
                    <span className="logo_short">mn+</span>
                    <span className="logo_full">mnplus</span>
                </StyledLogo>
            </LogoLink>
        </Link>
        <MainNav>
            <Link href="/all" passHref>
                <StyledLink>
                    All
                </StyledLink>
            </Link>
            <Link href="/login" passHref>
                {/* <StyledLink>
                    News
                </StyledLink> */}
                <IconButton name="Login" size={1} />
            </Link>
            <IconButton name={isDark ? "Moon" : "Sun"} size={1} onClick={onThemeToggler} />
        </MainNav>
        <SearchInput icon="Search" placeholder="search" onChange={() => null} />
        <Content> {children} </Content>
        <Footer>
            {new Date().getFullYear()} all right for all
        </Footer>
    </Wrapper>
);