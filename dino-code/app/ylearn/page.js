// app/ylearn/page.js
import SelectionButton from '../components/selectionButton.js';
import Navbar from '../components/Navbar.js';
import styles from './page.module.css';

export default function YLearnPage() {
  return (
    <div className={styles.backgroundFull}>
      <Navbar />
      <main className={styles.main}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
            Why do you want to learn this skill
            </h1>
            <div className={styles.buttonContainer}>
              <SelectionButton selectionText="I'm just curious" href='/daylimit' />
              <SelectionButton selectionText='For my current job' href='/daylimit' />
              <SelectionButton selectionText='project in my personal time' href='/daylimit' />
              <SelectionButton selectionText='For a hobby' href='/daylimit' />
              <SelectionButton selectionText='School' href='/daylimit' />
              <SelectionButton selectionText='Other' href='/daylimit' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}