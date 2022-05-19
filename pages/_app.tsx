import Head from "next/head";
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
