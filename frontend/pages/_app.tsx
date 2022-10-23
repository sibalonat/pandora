
import type { AppProps } from 'next/app'
import { Layout } from '@/components/Layout/Layout'
// import { ThemeProvider } from '@emotion/react'
// import { Themes } from '@/styles/themes'
// import { useEffect, useState } from 'react'
// ThemeProvider

// useState
// useEffect


function MyApp({ Component, pageProps }: AppProps) {
  // const [isDark, setIsDark] = useState(false)
  // // const toggleDark = () => setIsDark(!isDark)
  // const toggleDark = () => {
  //   localStorage.setItem('theme', isDark ? 'light' : 'dark')
  //   setIsDark(!isDark)
  // }
  // useEffect(() => {
  //   const isDark = Boolean(localStorage.getItem('theme') === 'dark')
  //   setIsDark(window.matchMedia("prefers-color-scheme: dark").matches || isDark)
  // }, [])
  // const theme = Themes[isDark ? 'dark' : 'light']
  return (
    // <ThemeProvider theme={theme}>
      // <Layout isDark={isDark} onThemeToggler={toggleDark}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </ThemeProvider>
  )
}

export default MyApp
