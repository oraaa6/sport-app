import { ReactNode } from "react";
import styles from "./main-layout.module.scss";
import Logo from "@/assets/images/Logo.png";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { PageContainer } from "@/components/page-container/page-container";

export type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Link className={styles.link} to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Breadcrumb />
      <PageContainer>{children}</PageContainer>
    </div>
  );
}
