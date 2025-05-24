"use client";
import React from "react";
import { useRouter } from "next/navigation";
import KernedCard from "../components/KernedCard";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export default function CSSPage() {
  const router = useRouter();

  const handleCSSFundamentalsClick = () => {
    router.push("/css-fundamentals");
  };

  return (
    <>
      <NavBar theme="css" />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.pageTitle}>CSS</h1>
          <div className={styles.topCarousel}>
            <div className={styles.smallCard}>
              <div
                className={styles.smallCardHeader}
                style={{ backgroundColor: "#5B64C2" }}
              ></div>
              <div className={styles.smallCardContent}>
                <h3 className={styles.smallCardTitle}>CSS Introduction</h3>
              </div>
            </div>
            <div className={styles.smallCard}>
              <div
                className={styles.smallCardHeader}
                style={{ backgroundColor: "#5B64C2" }}
              ></div>
              <div className={styles.smallCardContent}>
                <h3 className={styles.smallCardTitle}>CSS Intermediate</h3>
              </div>
            </div>
            <div className={styles.smallCard}>
              <div
                className={styles.smallCardHeader}
                style={{ backgroundColor: "#5B64C2" }}
              ></div>
              <div className={styles.smallCardContent}>
                <h3 className={styles.smallCardTitle}>CSS Professional</h3>
              </div>
            </div>
          </div>
          <div className={styles.searchBarWrapper}>
            <div className={styles.searchBarBox}>
              <svg
                className={styles.searchIcon}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="9" cy="9" r="7" stroke="#222" strokeWidth="2" />
                <line
                  x1="14.4142"
                  y1="14.5858"
                  x2="18"
                  y2="18"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className={styles.searchPlaceholder}>
                Find your course...
              </span>
            </div>
          </div>
          <div className={styles.coursesContainer}>
            <KernedCard
              title="CSS Fundamentals"
              description="A beginner course on the fundamentals of CSS."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#5B64C2"
              onClick={handleCSSFundamentalsClick}
            />
            <KernedCard
              title="CSS Class Selector"
              description="A beginner course on the fundamentals of CSS."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#5B64C2"
            />
            <KernedCard
              title="CSS ID Selectors"
              description="A beginner course on the fundamentals of CSS."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#5B64C2"
            />
            <KernedCard
              title="CSS Media Queries"
              description="A beginner course on the fundamentals of CSS."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#5B64C2"
            />
            <KernedCard
              title="CSS Flex Box"
              description="A beginner course on the fundamentals of CSS."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#5B64C2"
            />
          </div>
        </main>
      </div>
      <Footer theme="css" />
    </>
  );
}
