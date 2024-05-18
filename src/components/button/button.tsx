import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "light" | "dark";
  withoutBorder?: boolean;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconPosition?: "left" | "right";
  href?: string;
}

export function Button({
  children,
  Icon,
  iconPosition = "right",
  variant = "light",
  withoutBorder,
  href,
  ...props
}: ButtonProps) {
  const { className } = props;

  const renderButtonContent = () =>
    Icon ? (
      <div className={styles.buttonWithIconContainer}>
        <span>{children}</span>
        <Icon className={styles.icon} />
      </div>
    ) : (
      children
    );

  if (href && !props.disabled) {
    return (
      <Link to={href} className={styles.link}>
        {renderButtonContent()}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={clsx(
        styles.button,
        styles[variant],
        withoutBorder && styles.withoutBorder,
        styles[iconPosition],
        className
      )}
    >
      {renderButtonContent()}
    </button>
  );
}
