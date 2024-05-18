import styles from "./table-place.module.scss";
import clsx from "clsx";

export type League = "european" | "champions" | "championship";

export type Trend = "increase" | "decrease" | "constant";

type TablePlaceProps = {
  place: number;
  leauge: League;
  type?: Trend;
};

export function TablePlace({
  place,
  leauge,
  type = "constant",
}: TablePlaceProps) {
  return (
    <p className={clsx(styles.tablePlace, styles[leauge], styles[type])}>
      {place}
    </p>
  );
}
