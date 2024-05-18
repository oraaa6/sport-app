import { League } from "../table-place/table-place";

export type GeneratedRowsData = {
  leauge: League;
  team: { name: string; image: string };
  m: number;
  b: { scored: number; conceded: number };
  rb: number;
  p: number;
}[];
