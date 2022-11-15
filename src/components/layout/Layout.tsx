import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <div>
        <div className={`page ${styles.main}`}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
