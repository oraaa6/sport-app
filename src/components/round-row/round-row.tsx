import { Button } from "../button/button";
import { Team } from "../team/team";
import styles from "./round-row.module.scss";
import Monitor from "@/assets/icons/monitor.svg";
import Arrow from "@/assets/icons/arrow-right-circle.svg";

type TeamData = { image: string; name: string; score?: number };
type RoundRowProps = {
  date: string;
  homeTeam: TeamData;
  awayTeam: TeamData;
};

export function RoundRow({ date, homeTeam, awayTeam }: RoundRowProps) {
  return (
    <div className={styles.container}>
      <p className={styles.date}>{date}</p>
      <div className={styles.teamsContainer}>
        <Team name={homeTeam.name} image={homeTeam.image} />
        <Team name={awayTeam.name} image={awayTeam.image} />
      </div>
      <div className={styles.scoreContainer}>
        <p className={styles.score}>{homeTeam.score}</p>
        <p className={styles.score}>{awayTeam.score}</p>
      </div>
      <div className={styles.detailsContainer}>
        <Button>
          <img src={Monitor} alt="monitor-button" />
        </Button>
        <Button icon={Arrow}>Szczegóły</Button>
      </div>
    </div>
  );
}
