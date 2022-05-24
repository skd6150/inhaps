import problem from "./problem";

export default interface user {
  user_id: string;
  rank: number;
  user_link: string;
  exp: number;
  solved_data: problem[];
}
