// app/experience/page.js
import SelectionButton from '../components/selectionButton.js';
import Navbar from '../components/Navbar.js';
import styles from './page.module.css';

export default function ExperiencePage() {
  return (
    <div className={styles.backgroundFull}>
      <Navbar />
      <main className={styles.main}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
            Do you have any experience with this subject?
            </h1>
            <div className={styles.buttonContainer}>
              <SelectionButton selectionText='I have no experience' href='/profquiz' />
              <SelectionButton selectionText='I have some experience' href='/profquiz' />
              <SelectionButton selectionText='I have a lot of experience' href='/profquiz' />
              <SelectionButton selectionText='I am re-learning' href='/profquiz' />
              <SelectionButton selectionText='I am an expert' href='/profquiz' />
              <SelectionButton selectionText='Not sure' href='/profquiz' />
            </div>
          </div>  
        </div>
      </main>
    </div>
  );
}