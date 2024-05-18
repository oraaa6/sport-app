import { useGames } from "@/hooks/use-games";
import { GameParams } from "@/services/games/games.service.types";
import { useState } from "react";
import { RoundTable } from "@/components/round-table/round-table";

export function Home() {
  const ON_PAGE = 5;

  const [params, setParams] = useState<GameParams>({
    onPage: ON_PAGE,
    page: 1,
    orderBy: "round",
    orderDirection: "desc",
  });

  const { games, isLoading } = useGames(params);

  return (
    <RoundTable
      onParamsChange={setParams}
      params={params}
      games={games}
      isLoading={isLoading}
    />
  );
}
