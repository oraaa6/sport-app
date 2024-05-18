import styles from "./team-cell.module.scss";

type TeamCellProps = {
  name: string;
  image: string;
};

export function TeamCell({ name, image }: TeamCellProps) {
  return (
    <div className={styles.teamContainer}>
      <img width={16} height={16} src={image} alt={`${name}-image`} />
      <p className={styles.teamName}>{name}</p>
    </div>
  );
}
