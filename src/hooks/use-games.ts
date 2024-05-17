import { ReactQueryKeys } from "@/react-query";
import { getGames } from "@/services/games/games.service";
import { GameParams } from "@/services/games/games.service.types";
import { useQuery } from "@tanstack/react-query";

export function useGames(params: GameParams) {
  const { data: games, isLoading } = useQuery({
    queryKey: ReactQueryKeys.GAMES(params),
    queryFn: () => getGames(params),
  });

  return { games, isLoading };
}
