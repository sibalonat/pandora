import { FC, useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
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
import { login, selectUser } from "@/services/userSlice";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const Layout: FC = ({ children }) => {
  const { username } = useSelector<RootState, RootState['user']>(selectUser)
  const [isDark, setIsDark] = useState(false);

  const dispatch = useDispatch<AppDispatch>()

  const toggleDark = () => {
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  };
  useIsomorphicLayoutEffect(() => {
    dispatch(login({}))
    const theme = localStorage.getItem("theme");
    const themeExistsInStorage = Boolean(theme !== null);

    setIsDark(
      themeExistsInStorage
        ? Boolean(theme === "dark")
        : window.matchMedia("(prefers-color-scheme: dark)").matches
    );
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
          <Link href={username ? '/user' : '/login'} passHref>
            <IconButton name={username ? 'User' : 'Login'} size={1} />
          </Link>
          <IconButton
            name={!isDark ? "Moon" : "Sun"}
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
