import { useGames } from "@/hooks/use-games";
import { GameParams } from "@/services/games/games.service.types";
import { useState } from "react";
import { RoundTable } from "@/components/round-table/round-table";
import { ON_PAGE_DEFAULT } from "@/components/round-table/round-table.constans";

export function Home() {
  const [params, setParams] = useState<GameParams>({
    onPage: ON_PAGE_DEFAULT,
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
