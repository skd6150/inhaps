import { useState, useEffect } from "react";
import { throttle } from "lodash";
import { SpinnerCircularFixed } from "spinners-react";
import useFetch from "../hooks/useFetch";
import style from "../styles/ranking-card.module.css";

const RankingCard = () => {
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isError } = useFetch();

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
        {isError || isLoading || data === undefined ? (
          <SpinnerCircularFixed
            size={90}
            thickness={180}
            speed={145}
            color="rgba(57, 80, 172)"
            secondaryColor="rgba(57, 138, 172)"
            className={style.spinner}
          />
        ) : (
          <div>
            <h2 className={style.title}>현재 우리학교 순위는?</h2>
            <span className={style.rankingSecondary}>
              {data.rank - 1}위 {data.upper_group}
            </span>
            <span className={style.rankingPrimary}>
              {data.rank}위 인하대학교
            </span>
            <span className={style.rankingSecondary}>
              {data.rank + 1}위 {data.lower_group}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RankingCard;
