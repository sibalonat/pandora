import styled from "@emotion/styled";

import { FC, useEffect, useLayoutEffect, useState } from "react";
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
import { ThemeProvider } from "@emotion/react";
import { Themes } from "@/styles/themes";

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

// useLayoutEffect

// @media(max-width: 500px) {
//     justify-content: center;
// }

type Props = {
  isDark: boolean;
  onThemeToggler: () => void;
};

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// export const Layout: FC<Props> = ({ children, isDark, onThemeToggler }) => (
export const Layout: FC = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => setIsDark(!isDark)
  const toggleDark = () => {
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  };
  useIsomorphicLayoutEffect(() => {
    const isDark = Boolean(localStorage.getItem("theme") === "dark") || window.matchMedia("prefers-color-scheme: dark").matches;
    setIsDark(isDark);
  }, []);
  const theme = Themes[isDark ? "dark" : "light"];
  return (
    <ThemeProvider theme={theme}>
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
            <StyledLink>All</StyledLink>
          </Link>
          <Link href="/login" passHref>
            {/* <StyledLink>
                    News
                </StyledLink> */}
            <IconButton name="Login" size={1} />
          </Link>
          <IconButton
            name={isDark ? "Moon" : "Sun"}
            size={1}
            onClick={toggleDark}
          />
        </MainNav>
        <SearchInput icon="Search" placeholder="search" onChange={() => null} />
        <Content> {children} </Content>
        <Footer>{new Date().getFullYear()} all right for all</Footer>
      </Wrapper>
    </ThemeProvider>
  );
};
