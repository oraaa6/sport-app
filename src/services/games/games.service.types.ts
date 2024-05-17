type Team = {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
};

type Game = {
  id: number;
  round: number;
  date: string;
  home_team: string;
  away_team: string;
  home_score: number;
  away_score: number;
  created_at: string;
  updated_at: string;
  home_team_object: Team;
  away_team_object: Team;
};

export type GamesResponse = {
  total: number;
  page: number;
  pages: number;
  data: Game[];
};

export type GameParams = {
  page: number;
  onPage: number;
  orderDirection: "asc" | "desc";
  orderBy:
    | "round"
    | "date"
    | "home_team"
    | "away_team"
    | "home_score"
    | "away_score";
};
