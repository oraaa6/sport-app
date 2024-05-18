import { Button } from "../button/button";
import styles from "./leauge-header.module.scss";
import Flag from "@/assets/images/eng.png";
import Arrow from "@/assets/icons/arrow-right-circle.svg?react";

type LeagueHeaderProps = {
  linkDescription: string;
  linkHref: string;
};
export function LeagueHeader({ linkDescription, linkHref }: LeagueHeaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.leaugeContainer}>
        <img className={styles.flag} src={Flag} alt="flag" />
        <p className={styles.leaugeName}>Anglia: Premier League</p>
      </div>
      <Button href={linkHref} Icon={Arrow}>
        {linkDescription}
      </Button>
    </div>
  );
}
