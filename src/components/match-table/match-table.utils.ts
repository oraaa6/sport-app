import { TableResponse } from "@/services/table/table.service.types";

import { Trend } from "../table-place/table-place";
import { GeneratedRowsData } from "./match-table.types";

export const generateRowsData = (
  tableData?: TableResponse
): GeneratedRowsData[] => {
  if (!tableData) {
    return [];
  }

  return tableData.flatMap(
    ({
      team: { name, image },
      points,
      goals_conceded,
      goals_scored,
      games,
      goals_ratio,
    }) => [
      [
        {
          leauge: "european",
          team: { name, image },
          m: games,
          b: { scored: goals_scored, conceded: goals_conceded },
          rb: goals_ratio,
          p: points,
        },
      ],
    ]
  );
};

export const generateTablePlaceType = (
  rb: GeneratedRowsData[0]["rb"]
): Trend => {
  if (rb < 0) {
    return "decrease";
  } else if (rb > 0) {
    return "increase";
  } else return "constant";
};
