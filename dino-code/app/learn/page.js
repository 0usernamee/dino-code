// app/learn/page.js
import SelectionButton from '../components/selectionButton.js';
import Navbar from '../components/Navbar.js';
import styles from './page.module.css';

export default function LearnPage() {
  return (
    <div className={styles.backgroundFull}>
      <Navbar />
      <main className={styles.main}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
            What are you here to learn
            </h1>
            <div className={styles.buttonContainer}>
              <SelectionButton selectionText='Learn how to use AI' href='/ylearn' />
              <SelectionButton selectionText='Understand code with AI' href='/ylearn' />
              <SelectionButton selectionText='Analyze data with code' href='/ylearn' />
              <SelectionButton selectionText='Understand the basics of coding' href='/ylearn' />
              <SelectionButton selectionText='Make and modify websites' href='/ylearn' />
              <SelectionButton selectionText='Other' href='/ylearn' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}