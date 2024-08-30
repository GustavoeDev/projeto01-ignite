import styles from "./Header.module.css";
import logoIgnite from "../assets/logo-ignite.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logoIgnite} alt="Logo do Ignite" />
        <span>Ignite Feed</span>
      </div>
    </header>
  );
}
