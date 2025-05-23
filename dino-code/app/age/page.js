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
              What's your age group?
            </h1>
            <div className="space-y-4">
              <SelectionButton selectionText='18 or under' />
              <SelectionButton selectionText='19-24' />
              <SelectionButton selectionText='25-34' />
              <SelectionButton selectionText='35-44' />
              <SelectionButton selectionText='45 or over' />
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}