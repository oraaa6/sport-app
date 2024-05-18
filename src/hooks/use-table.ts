import { ReactQueryKeys } from "@/react-query";
import { getTable } from "@/services/table/table.service";
import { useQuery } from "@tanstack/react-query";

export function useTable() {
  const { data } = useQuery({
    queryKey: ReactQueryKeys.TABLE(),
    queryFn: () => getTable(),
  });

  const tableData = data || [];

  return { tableData };
}
