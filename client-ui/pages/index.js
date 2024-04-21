import Head from "next/head";
import HomePage from "@/views/HomePage";

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
