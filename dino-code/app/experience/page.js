// app/age/page.js
import SelectionButton from '../components/selectionButton.js';
import Navbar from '../components/Navbar.js';
import styles from './page.module.css';

export default function AgePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className={styles.main}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
            Do you have any experience with this subject?
            </h1>
            <div className="space-y-4">
              <SelectionButton selectionText='I have no experience' href='./learn' />
              <SelectionButton selectionText='I have some experience' href='./learn' />
              <SelectionButton selectionText='I have a lot of experience' href='./learn' />
              <SelectionButton selectionText='I am re-learning' href='./learn' />
              <SelectionButton selectionText='I am an expert' href='./learn' />
              <SelectionButton selectionText='Not sure' href='./learn/page.js' />
            </div>
          </div>  
        </div>
      </main>
    </div>
  );
}