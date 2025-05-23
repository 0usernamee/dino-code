'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import navLogo from '../images/navLogo.svg';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menuButton}>
        <span className={styles.menuIcon}>≡</span>
      </div>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoContent}>
          <div className={styles.logoIcon}>
            <Image 
              src={navLogo} 
              alt="DinoCode Logo" 
              width={120} 
              height={120}
              className={styles.dino}
            />
          </div>
        </div>
      </Link>
    </nav>
  );
}