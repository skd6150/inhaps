import { useState, useEffect } from "react";
import { throttle } from "lodash";
import style from "../styles/ranking-card.module.css";
import ranking from "../interfaces/ranking";

interface RankingCardProps {
  ranking: ranking;
}

const RankingCard = ({ ranking }: RankingCardProps) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    const throttledHandleScroll = throttle(handleScroll, 10);
    handleScroll();
    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <div
      className={style.rankingCardWrapper}
      style={{ backgroundPositionY: -offset * 0.3 + "px" }}
    >
      <div className={style.filter}></div>
      <div className={style.rankingCard}>
        <div>
          <h2 className={style.title}>현재 우리학교 순위는?</h2>
          <span className={style.rankingSecondary}>
            {ranking.rank - 1}위 {ranking.upper_group}
          </span>
          <span className={style.rankingPrimary}>
            {ranking.rank}위 인하대학교
          </span>
          <span className={style.rankingSecondary}>
            {ranking.rank + 1}위 {ranking.lower_group}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RankingCard;
