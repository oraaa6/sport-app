import styles from "./match-table.module.scss";

export const HEADINGS = ["lp.", "drużyna", "m", "b", "rb", "p"];

export const LEGEND = [
  {
    description: "Awans - Liga Europy (Runda grupowa)",
    color: styles.europeanIncrease,
  },
  {
    description: "Spadek - Liga Europy (Runda grupowa)",
    color: styles.europeanDecrease,
  },
  {
    description: "Awans - Liga Mistrzów (Runda grupowa)",
    color: styles.championsIncrease,
  },
  {
    description: "Spadek - Liga Mistrzów (Runda grupowa)",
    color: styles.championsDecrease,
  },
  {
    description: "Awans - Championship ",
    color: styles.championshipIncrease,
  },
  {
    description: "Spadek - Championship",
    color: styles.championshipDecrease,
  },
];
