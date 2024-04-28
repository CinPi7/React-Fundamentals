import styles from "./Header.module.css";

import cinLogo from "./../assets/diamond_636600.png";

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={cinLogo} />
      </header>
    </div>
  );
}
