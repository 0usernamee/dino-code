// app/name/page.js
'use client';

import styles from './page.module.css';
import Navbar from '../components/Navbar';

export default function NamePage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    
    // Handle the first name - you can add your logic here
    console.log('First name submitted:', firstName);
    
    // Since we can't use router, you would need to handle navigation another way
    // For example, you could use window.location or store in localStorage and redirect
    localStorage.setItem('userFirstName', firstName);
    window.location.href = '/'; // Redirect to homepage or next page
  };

  return (
    <main className={styles.container}>
      <Navbar />
      
      <div className={styles.content}>
        <h1 className={styles.title}>Whats your First name?</h1>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="Your first name..."
            className={styles.inputField}
            required
          />
          
          <button
            type="submit"
            className={styles.submitButton}
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}