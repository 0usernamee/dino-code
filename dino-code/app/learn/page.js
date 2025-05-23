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
            What are you here to learn
            </h1>
            <div className="space-y-4">
              <SelectionButton selectionText='Learn how to use AI' href='./learn' />
              <SelectionButton selectionText='Understand code with AI' href='./learn' />
              <SelectionButton selectionText='Analyze data with code' href='./learn' />
              <SelectionButton selectionText='Understand the basics of coding' href='./learn' />
              <SelectionButton selectionText='Make and modify websites' href='./learn' />
              <SelectionButton selectionText='Other' href='./learn/page.js' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}