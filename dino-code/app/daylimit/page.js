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
            How long can you learn each day
            </h1>
            <div className="space-y-4">
              <SelectionButton selectionText='5 mins a day' href='/learn' />
              <SelectionButton selectionText='10 mins a day' href='/learn' />
              <SelectionButton selectionText='20 mins a day' href='/learn' />
              <SelectionButton selectionText='30 mins a day' href='/learn' />
              <SelectionButton selectionText='60 mins a day' href='/learn' />
              <SelectionButton selectionText='2 or more hours a day' href='/learn' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}