import Image from "next/image";
import problem from "../interfaces/problem";
import style from "../styles/tier-icon.module.css";

interface TierIconProps {
  prob: problem;
}

const TierIcon = ({ prob }: TierIconProps) => {
  return (
    <a href={prob.prob_link} className={style.tierIconWrapper}>
      <Image
        className={style.tierIcon}
        src={`/static/tier-icon/${prob.prob_rank}.svg`}
        alt={prob.prob_name}
        width={24}
        height={21}
      />
      <div className={style.description}>
        <span>
          [{prob.prob_num}] {prob.prob_name}
        </span>
        <br />
        <span>{prob.solved_date}</span>
      </div>
    </a>
  );
};

export default TierIcon;
