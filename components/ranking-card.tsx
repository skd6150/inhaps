import useRanking from "../hooks/useRanking";
import style from "../styles/ranking-card.module.css";

const RankingCard = () => {
  const { ranking, isLoading, isError } = useRanking();
  if (isLoading) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div>error</div>;
  }
  if (ranking === undefined) {
    return <div>no data</div>;
  }
  return (
    <div className={style.rankingCardWrapper}>
      <h2 className={style.title}>현재 우리학교 순위는?</h2>
      <span className={style.rankingSecondary}>
        {ranking.rank - 1}위 {ranking.upper_group}
      </span>
      <span className={style.rankingPrimary}>{ranking.rank}위 인하대학교</span>
      <span className={style.rankingSecondary}>
        {ranking.rank + 1}위 {ranking.lower_group}
      </span>
    </div>
  );
};

export default RankingCard;
