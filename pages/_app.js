/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', sans-serif;
  color: ${({ theme }) => theme.colors.contrastText};
}
html, body {
  min-height: 100vh;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;

// no arquivo db estarão as minhas configurações de tema para compartilhar na imersão
const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <title>Quiz How I Met Your Mother</title>
        <meta name="title" content="Quiz How I Met Your Mother" />
        <meta name="description" content="Teste os seus conhecimentos sobre a série How I Met Your Mother!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imersao-react-alura.malufell.vercel.app/" />
        <meta property="og:title" content="Quiz How I Met Your Mother" />
        <meta property="og:image" content="https://wallpaperset.com/w/full/8/8/f/541881.jpg" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  );
}
