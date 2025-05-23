// app/profquiz/page.js
'use client';

import Navbar from '../components/Navbar.js';
import styles from './page.module.css';
import Link from 'next/link';

export default function AgePage() {
  const handleClick = () => {
    window.location.href = '/homePage';
  };

  return (
    <div className={styles.backgroundFull}>
      <Navbar />
      <main className={styles.main}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
              Would you like to
              take a proficiency quiz?
            </h1>
            
            <div className="flex flex-col gap-8 w-full max-w-sm mx-auto">
              <button 
                onClick={handleClick}
                className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Yes, take me there
              </button>
              
              <button 
                onClick={handleClick}
                className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                No, I know my level
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mt-4 text-center">
              This is just a quick test to see what level you're at with this course!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}