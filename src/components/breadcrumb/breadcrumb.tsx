import { Link, useLocation } from "react-router-dom";
import styles from "./breadcrumb.module.scss";
import ArrowRight from "@/assets/icons/chevron-right.svg?react";
import { capitalizeWords } from "./breadcrumb.utils";
import { Fragment } from "react/jsx-runtime";

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);

  if (!pathnames.length) {
    return;
  }

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.breadcrumbs}>
        <Link className={styles.link} to="/">
          Piłka nożna
        </Link>

        {pathnames.map((name, index) => {
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Fragment key={name}>
              <ArrowRight stroke={styles.iconColor} />
              <p className={styles.lastPath}>{capitalizeWords(name)}</p>
            </Fragment>
          ) : (
            <Fragment key={name}>
              <ArrowRight stroke={styles.iconColor} />
              <Link className={styles.link} to={`/${name}`}>
                {capitalizeWords(name)}
              </Link>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
