import { Global, css } from '@emotion/react';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import emotionReset from 'emotion-reset';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
        />
        <title key="title"></title>
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
      </Head>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
