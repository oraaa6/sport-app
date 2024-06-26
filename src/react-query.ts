import { GameParams } from "./services/games/games.service.types";

export const ReactQueryKeys = {
  GAMES: ({ page, onPage, orderDirection, orderBy }: GameParams) => [
    "games",
    page,
    onPage,
    orderDirection,
    orderBy,
  ],
  TABLE: () => ["table"],
  TEAMS: () => ["teams"],
} as const;
