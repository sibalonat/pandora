import { GlobalStyles } from "@/styles/global";
import { Global } from "@emotion/react";
import { Html, Head, Main, NextScript } from "next/document";
// import Head from "next/head";

// Global
// GlobalStyles
// Html
// Head
// Main
// NextScript
export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Monoton" />
                <Global styles={GlobalStyles} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}