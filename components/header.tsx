import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>INHA x BOJ</h1>
      </div>
    </header>
  );
};

export default Header;
