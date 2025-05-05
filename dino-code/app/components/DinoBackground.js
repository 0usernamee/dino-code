import styles from './DinoBackground.module.css';

export default function DinoBackground({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.dinoFace}></div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}