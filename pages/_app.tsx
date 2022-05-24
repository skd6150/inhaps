import "../styles/globals.css";
import "../styles/normalize.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import user from "../interfaces/user";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
