import styles from "./team.module.scss";

type TeamProps = {
  name: string;
  image: string;
};
export function Team({ name, image }: TeamProps) {
  return (
    <div className={styles.teamContainer}>
      <img width={16} height={16} src={image} alt={`${name}-image`} />
      <p className={styles.teamName}>{name}</p>
    </div>
  );
}
