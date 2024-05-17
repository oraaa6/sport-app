import { getRequest } from "@/request/request";
import { GameParams, GamesResponse } from "./games.service.types";

export async function getGames(params: GameParams) {
  return getRequest<GamesResponse>("games", { params });
}
