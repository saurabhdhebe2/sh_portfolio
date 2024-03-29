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
        <meta
          name="description"
          content="Shubham Dhebe: Professional video editor and photographer specializing in editing for various categories including reels, TV shows, music, travel films, advertisements, weddings, personal projects, after movies, and more."
        />
        <meta
          name="keywords"
          content="video editor, photographer, reel editing, TV show editing, music editing, travel film editing, advertisement editing, wedding editing, personal project editing, after movie editing"
        />
        <link rel="icon" href="/assets/icons/favicon.ico"></link>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
