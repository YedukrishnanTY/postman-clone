import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import HomePage from "@/views/HomePage";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Postman</title>
      </Head>
      <HomePage />
    </>
  );
}
