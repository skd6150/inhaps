import { useRecoilValue } from "recoil";
import { userRankingState } from "../pages/_app";
import style from "../styles/table.module.css";
import TierIcon from "./tier-icon";

const Table = () => {
  const userRanking = useRecoilValue(userRankingState);
  return (
    <table className={style.table}>
      <thead className={style.tableHead}>
        <tr>
          <th className={style.rank}>순위</th>
          <th className={style.name}>이름</th>
          <th className={style.exp}>경험치</th>
          <th className={style.prob}>문제</th>
        </tr>
      </thead>
      <tbody className={style.tableBody}>
        {userRanking.map((user, idx) => {
          return (
            <tr key={idx}>
              <td className={style.rank}>{idx + 1}</td>
              <td className={style.name}>{user.user_name}</td>
              <td className={style.exp}>{user.exp}</td>
              <td className={style.prob}>
                {user.solved_data.map((prob) => (
                  <TierIcon key={idx + prob.prob_name} prob={prob} />
                ))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
