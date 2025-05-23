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
            Why do you want to learn this skill
            </h1>
            <div className="space-y-4">
              <SelectionButton selectionText='I’m just curious' href='/learn' />
              <SelectionButton selectionText='For my current job' href='/learn' />
              <SelectionButton selectionText='project in my personal time' href='/learn' />
              <SelectionButton selectionText='For a hobby' href='/learn' />
              <SelectionButton selectionText='School' href='/learn' />
              <SelectionButton selectionText='Other' href='/learn' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}