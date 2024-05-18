import { useTeams } from "@/hooks/use-teams";
import styles from "./teams.module.scss";

export function Teams() {
  const { teams } = useTeams();
  return (
    <div className={styles.container}>
      {teams?.map(({ image, name }) => (
        <div key={name} className={styles.teamContainer}>
          <img className={styles.image} src={image} alt="" />
          <p className={styles.name}>{name}</p>
        </div>
      ))}
    </div>
  );
}
