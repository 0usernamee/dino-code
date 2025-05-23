// app/age/page.js
import SelectionButton from '../components/selectionButton.js';
import Navbar from '../components/Navbar.js';
import styles from './page.module.css';

export default function AgePage() {
  return (
    <div className={styles.backgroundFull}>
      <Navbar />
      <main className={styles.main}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
              What's your age group?
            </h1>
            <div className={styles.buttonContainer}>
              <SelectionButton selectionText='18 or under' href='/expertise' />
              <SelectionButton selectionText='19-24' href='/expertise' />
              <SelectionButton selectionText='25-34' href='/expertise' />
              <SelectionButton selectionText='35-44' href='/expertise' />
              <SelectionButton selectionText='45 or over' href='/expertise' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}