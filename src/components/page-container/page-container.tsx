import styles from "./page-container.module.scss";

export function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
