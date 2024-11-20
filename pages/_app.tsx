import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <meta property="og:title" content="Onebitflix" key="title" />
                <meta
                    name="description"
                    content="Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
