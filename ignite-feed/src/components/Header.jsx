import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src="https://cdn-icons-png.flaticon.com/512/599/599502.png" alt="Logo" />
      <strong><span>Ignite</span><em>Feed</em></strong>

    </header>
  )
}

export default Header;