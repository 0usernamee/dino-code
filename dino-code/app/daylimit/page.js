// app/daylimit/page.js
import SelectionButton from '../components/selectionButton.js';
import Navbar from '../components/Navbar.js';
import styles from './page.module.css';

export default function DayLimitPage() {
  return (
    <div className={styles.backgroundFull}>
      <Navbar />
      <main className={styles.main}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
            How long can you learn each day
            </h1>
            <div className={styles.buttonContainer}>
              <SelectionButton selectionText='5 mins a day' href='/experience' />
              <SelectionButton selectionText='10 mins a day' href='/experience' />
              <SelectionButton selectionText='20 mins a day' href='/experience' />
              <SelectionButton selectionText='30 mins a day' href='/experience' />
              <SelectionButton selectionText='60 mins a day' href='/experience' />
              <SelectionButton selectionText='2 or more hours a day' href='/experience' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}