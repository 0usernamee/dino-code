import KernedCard from "../components/KernedCard";
import styles from "./page.module.css";

export default function KernedCardExamplePage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Kerned Card Example</h1>

      <div className={styles.cardContainer}>
        <KernedCard
          title="Learn HTML"
          description="A beginner course on the fundamentals of HTML"
          progress={{ current: 0, total: 10 }}
          difficulty="Beginner"
          duration="10 hours"
          headerColor="#fb7e6e"
        />
      </div>
    </main>
  );
}
