import { useRecoilValue } from "recoil";
import { groupRankingState } from "../pages/_app";
import style from "../styles/ranking-card.module.css";

const RankingCard = () => {
  const groupRanking = useRecoilValue(groupRankingState);
  return (
    <div className={style.rankingCardWrapper}>
      <h2 className={style.title}>현재 우리학교 순위는?</h2>
      <span className={style.rankingSecondary}>
        {groupRanking.rank - 1}위 {groupRanking.upper_group}
      </span>
      <span className={style.rankingPrimary}>
        {groupRanking.rank}위 인하대학교
      </span>
      <span className={style.rankingSecondary}>
        {groupRanking.rank + 1}위 {groupRanking.lower_group}
      </span>
    </div>
  );
};

export default RankingCard;
