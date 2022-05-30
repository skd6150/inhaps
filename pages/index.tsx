import type { NextPage } from "next";
import axios from "axios";
import boj from "../interfaces/boj";
import RankingCard from "../components/ranking-card";
import Table from "../components/table";
import style from "../styles/index-page.module.css";

const Home: NextPage<boj> = (data: boj) => {
  return (
    <div className={style.contentWrapper}>
      <div className={style.rankingCard}>
        <RankingCard ranking={data} />
      </div>
      <Table userList={data.user_data} />
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await axios.get<boj>("http://3.38.227.220:8000/inhaboj/");
    console.log(res);
    return {
      props: res.data,
      revalidate: 60,
    };
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default Home;
