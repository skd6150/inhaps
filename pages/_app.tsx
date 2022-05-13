import "../styles/globals.css";
import "../styles/normalize.css";
import type { AppProps } from "next/app";
import { RecoilRoot, atom } from "recoil";
import Layout from "../components/layout";
import problem from "../interfaces/problem";
import user from "../interfaces/user";

export const groupRankingState = atom({
  key: "groupRanking",
  default: {
    rank: 0,
    upper_group: "",
    lower_group: "",
  },
});

export const userRankingState = atom<user[]>({
  key: "userRanking",
  default: [],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
