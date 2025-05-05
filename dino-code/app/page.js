'use client';
import Link from 'next/link';
import Navbar from './components/Navbar';
import styles from './page.module.css';
import DinoBackground from './components/DinoBackground';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome!</h1>
        <div className={styles.buttonContainer}>
          <Link href="/login" className={styles.button}>
            Sign in
          </Link>
          <Link href="/signup" className={styles.button}>
            Register
          </Link>
        </div>
      </main>
    </div>
  );
}