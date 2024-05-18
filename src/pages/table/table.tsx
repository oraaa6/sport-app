import { MatchTable } from "@/components/table/match-table";
import { useTable } from "@/hooks/use-table";

export function Table() {
  const { tableData } = useTable();

  return <MatchTable tableData={tableData || []} />;
}
