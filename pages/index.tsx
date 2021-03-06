import type { NextPage } from "next";
import Head from "next/head";
import { IndexView } from "../views/Index";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Who I am</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexView />
    </>
  );
};

export default Home;
