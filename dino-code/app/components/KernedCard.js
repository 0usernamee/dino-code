"use client";

import { useRef } from "react";
import styles from "./KernedCard.module.css";

export default function KernedCard({
  title = "Learn HTML",
  description = "A beginner course on the fundamentals of JavaScript",
  progress = { current: 0, total: 10 },
  difficulty = "Beginner",
  duration = "10 hours",
  headerColor = "#fb7e6e",
}) {
  // Ref for the card element
  const cardRef = useRef(null);

  return (
    <div className={styles.cardContainer} ref={cardRef}>
      <div className={styles.card}>
        {/* Header */}
        <div
          className={styles.cardHeader}
          style={{ backgroundColor: headerColor }}
        >
          {progress.current}/{progress.total}
        </div>

        {/* Main Content */}
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>
            {title}
            <span className={styles.titleUnderline}></span>
          </h2>

          <p className={styles.cardDescription}>{description}</p>
        </div>

        {/* Footer - Ensuring this is always rendered */}
        <div className={styles.cardFooter}>
          <div className={styles.difficultyContainer}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="12" width="4" height="8" fill="#5a5a5a" />
              <rect x="10" y="8" width="4" height="12" fill="#5a5a5a" />
              <rect x="16" y="4" width="4" height="16" fill="#5a5a5a" />
            </svg>
            <span className={styles.difficultyText}>{difficulty}</span>
          </div>
          <div className={styles.durationText}>{duration}</div>
        </div>
      </div>
    </div>
  );
}
