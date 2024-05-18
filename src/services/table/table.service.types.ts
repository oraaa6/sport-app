import { Team } from "../games/games.service.types";

export type TableTeam = {
  team: Team;
  points: number;
  goals_scored: number;
  goals_conceded: number;
  goals_ratio: number;
  games: number;
};

export type TableResponse = TableTeam[];
