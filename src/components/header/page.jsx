import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1 className={styles.title}>Wiki Tech</h1>
        </div>
        
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li><a href="/" className={styles.navLink}>Ínicio</a></li>
            <li><a href="/framework" className={styles.navLink}>Frameworks</a></li>
            <li><a href="/categories" className={styles.navLink}>Meta-Framework</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}