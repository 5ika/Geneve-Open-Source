import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Genève Open Source</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Genève Open Source" />
        <meta
          name="description"
          content="Site référençant les applications Open Source qui concernent Genève et sa région."
        />
      </Head>
      <Script
        async
        defer
        data-website-id="f31f8a0d-af9c-484e-adb9-2c454b00d5f9"
        src="https://umami.hidora.com/umami.js"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
