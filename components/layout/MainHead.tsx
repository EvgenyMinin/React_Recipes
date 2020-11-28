import React from "react";
import Head from "next/head";

import { ITitle } from "./types";

const MainHead = ({ title }: ITitle) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="A recipe discovery app powered by Next.js."
      />
      <meta name="author" content="EvgenyMinin" />
      <meta name="keyword" content="next, react, typescript, js" />
      <meta name="og:type" content="website" />

      <meta name="og:title" content={title} />
      <meta name="og:url" content="https://evgenyminin.github.io" />
      <meta name="og:image" content="/logo.svg" />
      <meta
        name="og:description"
        content="A recipe discovery app powered by Next.js."
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />

      <link
        rel="icon"
        sizes="32x32"
        type="image/png"
        href="/favicon/favicon-32x32.png"
      />

      <link
        rel="icon"
        sizes="16x16"
        type="image/png"
        href="/favicon/favicon-16x16.png"
      />

      <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />

      <link rel="manifest" href="/favicon/site/webmanifest" />
    </Head>
  );
};

export default MainHead;
