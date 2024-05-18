import { Link, useLocation } from "react-router-dom";
import styles from "./breadcrumb.module.scss";
import ArrowRight from "@/assets/icons/chevron-right.svg?react";

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);
  let breadcrumbPath = "";

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
          breadcrumbPath += `/${name}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <>
              <ArrowRight stroke={styles.iconColor} />
              <p className={styles.lastPath}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </p>
            </>
          ) : (
            <Link className={styles.link} to={breadcrumbPath}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
