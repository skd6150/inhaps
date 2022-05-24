import useSWR from "swr";
import axios from "axios";
import boj from "../interfaces/boj";
import ranking from "../interfaces/ranking";

const fetcher = async (url: string) => {
  const { data } = await axios.get<boj>(url);
  return {
    id: data.id,
    rank: data.rank,
    upper_group: data.upper_group,
    lower_group: data.lower_group,
  };
};

const useRanking = () => {
  const { data, error } = useSWR<ranking>(process.env.URL, fetcher);

  return {
    ranking: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useRanking;
