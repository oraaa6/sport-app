import { ReactQueryKeys } from "@/react-query";
import { getGames } from "@/services/games/games.service";
import {
  GameParams,
  GamesResponse,
} from "@/services/games/games.service.types";
import { useQuery } from "@tanstack/react-query";

export function useGames(params: GameParams) {
  const { data, isLoading } = useQuery({
    queryKey: ReactQueryKeys.GAMES(params),
    queryFn: () => getGames(params),
  });

  const games = data || ({} as GamesResponse);
  return { games, isLoading };
}
