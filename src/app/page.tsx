import Head from "next/head";
import styles from "./HomeNoAuth.module.scss"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>DevFlix</title>
      </Head>
      <main>
          <HeaderNoAuth />
      </main>
    </>
  )
}

export default HomeNoAuth;