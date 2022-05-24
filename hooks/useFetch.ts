import useSWR from "swr";
import axios from "axios";
import boj from "../interfaces/boj";

const fetcher = async (url: string) => {
  try {
    const res = await axios.get<boj>(url);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const useFetch = () => {
  const { data, error } = useSWR<boj>(
    "http://3.38.227.220:8000/inhaboj/",
    fetcher
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: false,
  };
};

export default useFetch;
