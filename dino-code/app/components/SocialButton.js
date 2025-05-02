'use client';
import Link from 'next/link';
import styles from './SocialButton.module.css';

export default function SocialButton({ provider, text }) {
  const getProviderStyles = () => {
    switch (provider) {
      case 'meta':
        return styles.meta;
      case 'google':
        return styles.google;
      case 'apple':
        return styles.apple;
      default:
        return '';
    }
  };

  const getProviderIcon = () => {
    switch (provider) {
      case 'meta':
        return (
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
          </svg>
        );
      case 'google':
        return (
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        );
      case 'apple':
        return (
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.4-1.09-.41-2.09-.42-3.23 0-1.44.56-2.23.47-3.13-.38C3.21 16.16 3.63 8.84 8.07 8.4c1.35-.06 2.28.59 3.11.61.83.01 1.94-.74 3.48-.63 1.2.09 2.29.56 3.08 1.47-2.51 1.63-2.14 5.57.26 6.76-.66 1.94-1.57 3.88-2.96 4.72l.01-.05z" />
            <path fill="currentColor" d="M15.25 6.7c-1.44-1.55-1.19-4.7-1.19-4.7s-2.72.64-3.96 2.87c-1.12 2.01-.68 4.27-.68 4.27 1.63.14 3.53-1.21 5.83-2.44z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Link href="#" className={`${styles.button} ${getProviderStyles()}`}>
      <span className={styles.iconContainer}>{getProviderIcon()}</span>
      <span className={styles.text}>{text}</span>
    </Link>
  );
}