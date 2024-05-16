import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "light" | "dark";
  withoutBorder?: boolean;
  icon?: string;
  href?: string;
}

export function Button({
  children,
  icon,
  variant = "light",
  withoutBorder,
  href,
  ...props
}: ButtonProps) {
  const renderContent = () =>
    icon ? (
      <div className={styles.buttonWithIconContainer}>
        <span>{children}</span>
        <img className={styles.icon} src={icon} alt="icon" />
      </div>
    ) : (
      children
    );

  if (href && !props.disabled) {
    return (
      <Link to={href} className={styles.link}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={clsx(
        styles.button,
        styles[variant],
        withoutBorder && styles.withoutBorder
      )}
    >
      {renderContent()}
    </button>
  );
}
