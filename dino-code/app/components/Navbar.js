
'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menuButton}>
        <span className={styles.menuIcon}>≡</span>
      </div>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoContent}>
          <div className={styles.logoIcon}>
            <div className={styles.dino}></div>
          </div>
          <span className={styles.logoText}>DinoCode</span>
        </div>
      </Link>
    </nav>
  );
}