import React from "react";
import KernedCard from "../components/KernedCard";
import styles from "./page.module.css";

export default function HTMLPage() {
  return (
    <div className={styles.container}>
      {/* Main Content */}
      <main className={styles.main}>
        {/* Page Title */}
        <h1 className={styles.pageTitle}>HTML</h1>

        {/* Small Cards Carousel */}
        <div className={styles.topCarousel}>
          <div className={styles.smallCard}>
            <div
              className={styles.smallCardHeader}
              style={{ backgroundColor: "#FB7E6E" }}
            ></div>
            <div className={styles.smallCardContent}>
              <h3 className={styles.smallCardTitle}>Introduction to HTML</h3>
            </div>
          </div>
          <div className={styles.smallCard}>
            <div
              className={styles.smallCardHeader}
              style={{ backgroundColor: "#FB7E6E" }}
            ></div>
            <div className={styles.smallCardContent}>
              <h3 className={styles.smallCardTitle}>HTML Intermediate</h3>
            </div>
          </div>
          <div className={styles.smallCard}>
            <div
              className={styles.smallCardHeader}
              style={{ backgroundColor: "#FB7E6E" }}
            ></div>
            <div className={styles.smallCardContent}>
              <h3 className={styles.smallCardTitle}>HTML Professional</h3>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={styles.searchBarWrapper}>
          <div className={styles.searchBarBox}>
            <svg
              className={styles.searchIcon}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="9" cy="9" r="7" stroke="#999" strokeWidth="2" />
              <line
                x1="14.4142"
                y1="14.5858"
                x2="18"
                y2="18"
                stroke="#999"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className={styles.searchPlaceholder}>Find your topic...</span>
          </div>
        </div>

        {/* Course Cards */}
        <div className={styles.coursesContainer}>
          <KernedCard
            title="HTML Fundamentals"
            description="A beginner course on the fundamentals of HTML."
            progress={{ current: 0, total: 10 }}
            difficulty="Beginner"
            duration="10 hours"
            headerColor="#FB7E6E"
          />
          <KernedCard
            title="HTML Tables"
            description="A beginner course on HTML tables and data structure."
            progress={{ current: 0, total: 10 }}
            difficulty="Beginner"
            duration="10 hours"
            headerColor="#FB7E6E"
          />
          <KernedCard
            title="HTML Forms"
            description="A beginner course on HTML forms and input elements."
            progress={{ current: 0, total: 10 }}
            difficulty="Beginner"
            duration="10 hours"
            headerColor="#FB7E6E"
          />
          <KernedCard
            title="HTML Intermediate"
            description="A beginner course on the fundamentals of HTML."
            progress={{ current: 0, total: 10 }}
            difficulty="Beginner"
            duration="10 hours"
            headerColor="#FB7E6E"
          />
          <KernedCard
            title="HTML Classes & Objects"
            description="A beginner course on the fundamentals of HTML."
            progress={{ current: 0, total: 10 }}
            difficulty="Beginner"
            duration="10 hours"
            headerColor="#FB7E6E"
          />
          <KernedCard
            title="HTML Inheritance"
            description="A beginner course on the fundamentals of HTML."
            progress={{ current: 0, total: 10 }}
            difficulty="Beginner"
            duration="10 hours"
            headerColor="#FB7E6E"
          />
        </div>
      </main>
    </div>
  );
}
