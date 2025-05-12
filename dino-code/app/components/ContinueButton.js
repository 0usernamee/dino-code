// components/ContinueButton.js
import React from 'react';
import styles from './ContinueButton.module.css';

const ContinueButton = ({ onClick, disabled = false, text = "Continue" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.continueButton}
    >
      {text}
    </button>
  );
};

export default ContinueButton;