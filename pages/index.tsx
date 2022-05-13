import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { groupRankingState, userRankingState } from "./_app";
import RankingCard from "../components/ranking-card";
import Table from "../components/table";
import style from "../styles/index-page.module.css";

const Home: NextPage = () => {
  const [groupRanking, setGroupRanking] = useRecoilState(groupRankingState);
  const [userRanking, setUserRanking] = useRecoilState(userRankingState);

  useEffect(() => {
    setGroupRanking({
      rank: 23,
      upper_group: "A 대학교",
      lower_group: "B 대학교",
    });
    setUserRanking([
      {
        user_name: "skd6150",
        user_link: "https://www.acmicpc.net/user/skd6150",
        exp: 1234,
        solved_data: [
          {
            prob_num: 1013,
            prob_rank: 11,
            prob_link: "https://www.acmicpc.net/problem/1013",
            prob_name: "Contact",
            solved_date: "2022-05-13",
          },
          {
            prob_num: 11066,
            prob_rank: 13,
            prob_link: "https://www.acmicpc.net/problem/11066",
            prob_name: "파일 합치기",
            solved_date: "2022-05-13",
          },
        ],
      },
      {
        user_name: "skd6150",
        user_link: "https://www.acmicpc.net/user/skd6150",
        exp: 1234,
        solved_data: [
          {
            prob_num: 1013,
            prob_rank: 11,
            prob_link: "https://www.acmicpc.net/problem/1013",
            prob_name: "Contact",
            solved_date: "2022-05-13",
          },
          {
            prob_num: 11066,
            prob_rank: 13,
            prob_link: "https://www.acmicpc.net/problem/11066",
            prob_name: "파일 합치기",
            solved_date: "2022-05-13",
          },
        ],
      },
      {
        user_name: "skd6150",
        user_link: "https://www.acmicpc.net/user/skd6150",
        exp: 1234,
        solved_data: [
          {
            prob_num: 1013,
            prob_rank: 11,
            prob_link: "https://www.acmicpc.net/problem/1013",
            prob_name: "Contact",
            solved_date: "2022-05-13",
          },
          {
            prob_num: 11066,
            prob_rank: 13,
            prob_link: "https://www.acmicpc.net/problem/11066",
            prob_name: "파일 합치기",
            solved_date: "2022-05-13",
          },
        ],
      },
    ]);
  }, [setGroupRanking, setUserRanking]);
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
