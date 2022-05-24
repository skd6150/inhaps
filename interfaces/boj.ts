import user from "./user";

export default interface boj {
  id: number;
  rank: number;
  upper_group: string;
  lower_group: string;
  user_data: user[];
}
