import styles from "./header-round.module.scss";

type HeaderRoundProps = {
  roundNumber: number;
};
export function HeaderRound({ roundNumber }: HeaderRoundProps) {
  return (
    <div className={styles.container}>
      <p className={styles.round}>{`RUNDA ${roundNumber}`}</p>
    </div>
  );
}
