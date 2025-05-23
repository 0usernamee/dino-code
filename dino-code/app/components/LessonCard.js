"use client";
import React from "react";
import styles from "./LessonCard.module.css";

export default function LessonCard({
  title,
  isCompleted = false,
  headerColor = "#FB7E6E",
  onClick,
}) {
  return (
    <div
      className={`${styles.card} ${isCompleted ? styles.completed : ""}`}
      onClick={onClick}
    >
      <div className={styles.header} style={{ backgroundColor: headerColor }}>
        {isCompleted && (
          <div className={styles.checkmark}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
}
