import type { NextPage } from "next";
import RankingCard from "../components/ranking-card";
import Table from "../components/table";
import style from "../styles/index-page.module.css";

const Home: NextPage = () => {
  return (
    <div className={style.contentWrapper}>
      <div className={style.rankingCard}>
        <RankingCard />
      </div>
      <Table />
    </div>
  );
};

export default Home;
