import { ReactQueryKeys } from "@/react-query";
import { getTeams } from "@/services/teams/teams.service";
import { useQuery } from "@tanstack/react-query";

export function useTeams() {
  const { data } = useQuery({
    queryKey: ReactQueryKeys.TEAMS(),
    queryFn: () => getTeams(),
  });

  const teams = data || [];

  return { teams };
}
