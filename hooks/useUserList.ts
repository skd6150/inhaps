import useSWR from "swr";
import axios from "axios";
import boj from "../interfaces/boj";
import user from "../interfaces/user";

const fetcher = async (url: string) => {
  const { data } = await axios.get<boj>(url);
  return data.user_data;
};

const useUserList = () => {
  const { data, error } = useSWR<user[]>(process.env.URL, fetcher);

  return {
    userList: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUserList;
