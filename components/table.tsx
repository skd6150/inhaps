import { SpinnerCircularFixed } from "spinners-react";
import useFetch from "../hooks/useFetch";
import style from "../styles/table.module.css";
import TierIcon from "./tier-icon";

const Table = () => {
  const { data, isLoading, isError } = useFetch();
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
      {isLoading || isError || data === undefined ? (
        <tbody>
          <tr>
            <td colSpan={4}>
              <div>
                <SpinnerCircularFixed
                  size={90}
                  thickness={180}
                  speed={145}
                  color="rgba(57, 80, 172)"
                  secondaryColor="rgba(57, 138, 172)"
                  className={style.spinner}
                />
              </div>
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody className={style.tableBody}>
          {data.user_data.map((user, idx) => {
            return (
              <tr key={idx}>
                <td className={style.rank}>{idx + 1}</td>
                <td className={style.name}>{user.user_id}</td>
                <td className={style.exp}>{user.exp}</td>
                <td className={style.prob}>
                  {user.solved_data.map((prob) => (
                    <TierIcon key={user.user_id + prob.prob_name} prob={prob} />
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};

export default Table;
