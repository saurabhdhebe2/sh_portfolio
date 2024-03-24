// pages/_app.js
import '../styles/globals.css'; // Import global styles
import { Fragment } from 'react'; // Import Fragment from React
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      {/* Render the page component */}
      <Head>
        <title>Shubham Dhebe</title>
        <meta name="description" content="Your website description goes here" />
        {/* <link rel="icon" src="/assets/icons/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
