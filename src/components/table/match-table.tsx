import { TableResponse } from "@/services/table/table.service.types";
import { LeagueHeader } from "../leauge-header/leauge-header";
import { TablePlace } from "../table-place/table-place";
import styles from "./match-table.module.scss";
import { generateRowsData, generateTablePlaceType } from "./match-table.utils";
import { HEADINGS, LEGEND } from "./match-table.constans";

type MatchTableProps = {
  tableData: TableResponse;
};

export function MatchTable({ tableData }: MatchTableProps) {
  return (
    <div className={styles.tableContainer}>
      <LeagueHeader linkDescription="Mecze" linkHref="/" />
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            {HEADINGS.map((heading) => (
              <th key={heading}>{heading.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {generateRowsData(tableData).map((row, index) =>
            row.map(({ team: { image, name }, leauge, m, b, rb, p }) => (
              <tr key={name}>
                <td>
                  <TablePlace
                    place={index + 1}
                    leauge={leauge}
                    type={generateTablePlaceType(rb)}
                  />
                </td>
                <td>
                  <div className={styles.teamContainer}>
                    <img className={styles.image} src={image} alt={name} />
                    <p className={styles.team}>{name}</p>
                  </div>
                </td>
                <td>{m}</td>
                <td>
                  {b.scored}:{b.conceded}
                </td>
                <td>{rb}</td>
                <td>{p}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className={styles.legendContainer}>
        {LEGEND.map(({ description, color }) => (
          <div className={styles.legend}>
            <div className={styles.square} style={{ backgroundColor: color }} />
            <p className={styles.description}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
