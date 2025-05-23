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
              What's your main field of expertise
            </h1>
            <div className="space-y-4">
              <SelectionButton selectionText='Software Development' href='/learn' />
              <SelectionButton selectionText='Marketing' href='/learn' />
              <SelectionButton selectionText='Design' href='/learn' />
              <SelectionButton selectionText='Product Management' href='/learn' />
              <SelectionButton selectionText='Finance' href='/learn' />
              <SelectionButton selectionText='Other' href='/learn' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}