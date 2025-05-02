'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import SocialButton from '../components/SocialButton';
import styles from './page.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Sign in!</h1>
        
        <form className={styles.form}>
          <input
            type="text"
            placeholder="UserName"
            className={styles.input}
          />
          
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          
          <button type="submit" className={styles.loginButton}>
            Login!
          </button>
        </form>
        
        <div className={styles.socialButtons}>
          <SocialButton 
            provider="meta" 
            text="Continue with Meta" 
          />
          
          <SocialButton 
            provider="google" 
            text="Continue with Google" 
          />
          
          <SocialButton 
            provider="apple" 
            text="Continue with Apple" 
          />
        </div>
      </main>
    </div>
  );
}