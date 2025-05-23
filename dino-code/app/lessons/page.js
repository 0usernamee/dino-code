import React from "react";
import Link from "next/link";
import KernedCard from "../components/KernedCard";
import NavBar from "../components/Navbar";
import styles from "./page.module.css";

export default function LessonsPage() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        {/* Main Content */}
        <main className={styles.main}>
          {/* Page Title */}
          <h1 className={styles.pageTitle}>Courses</h1>

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
              <span className={styles.searchPlaceholder}>
                Find your topic...
              </span>
            </div>
          </div>

          {/* Course Cards */}
          <div className={styles.coursesContainer}>
            <KernedCard
              title="Learn JavaScript"
              description="A beginner course on how to use JavaScript."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#00500B"
            />
            <Link href="/html-fundamentals" className={styles.cardLink}>
              <KernedCard
                title="Learn HTML"
                description="A beginner course on the fundamentals of HTML."
                progress={{ current: 0, total: 10 }}
                difficulty="Beginner"
                duration="10 hours"
                headerColor="#FB7E6E"
              />
            </Link>
            <KernedCard
              title="Learn CSS"
              description="A beginner course on the fundamentals of CSS."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#5B64C2"
            />
          </div>
        </main>
      </div>
    </>
  );
}
