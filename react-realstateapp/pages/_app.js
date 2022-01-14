import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

//This structure is always used in next.js
//In the documentation about chakra in the Set Up Provider we can find that we need to wrap all with the <ChakraProvider>

//NOTE: Nprogress: is the loading indication when something is happening.
//We pass an object and this one is called showSpinner , we set to false.
//Then we write Router.events.on and we call a  callback function with NProgress.start , so we are starting the loading as
//soon as we start changin the page and this is something that's built into next with the next router.
//We have different events that we can track and then we can call specific parts of the code on that event.

//

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  return (
    <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
