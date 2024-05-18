import SpinnerImage from "@/assets/icons/spinner.svg?react";
import clsx from "clsx";
import styles from "./spinner.module.scss";

type SpinnerProps = {
  className: string;
};
export function Spinner({ className }: SpinnerProps) {
  return <SpinnerImage className={clsx(styles.spinner, styles[className])} />;
}
