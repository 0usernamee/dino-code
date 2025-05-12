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
    
    localStorage.setItem('userFirstName', firstName);
    window.location.href = '/age'; // Redirect to homepage or next page
  };

  return (
    <main className={styles.container}>
      <Navbar />
      
      <div className={styles.content}>
        <h1 className={styles.title}>Whats your First name?</h1>
        
        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="Your first name..."
              className={styles.inputField}
              required
              autoComplete="off"
            />
            
            <button
              type="submit"
              className={styles.submitButton}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}