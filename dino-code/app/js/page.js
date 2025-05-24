"use client";
import React from "react";
import { useRouter } from "next/navigation";
import KernedCard from "../components/KernedCard";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export default function JSPage() {
  const router = useRouter();

  const handleJSFundamentalsClick = () => {
    router.push("/js-fundamentals");
  };

  return (
    <>
      <NavBar theme="javascript" />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.pageTitle}>JavaScript</h1>
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
                Find your Course...
              </span>
            </div>
          </div>
          <div className={styles.topCarousel}>
            <div className={styles.smallCard}>
              <div
                className={styles.smallCardHeader}
                style={{ backgroundColor: "#00500B" }}
              ></div>
              <div className={styles.smallCardContent}>
                <h3 className={styles.smallCardTitle}>
                  JavaScript Introduction
                </h3>
              </div>
            </div>
            <div className={styles.smallCard}>
              <div
                className={styles.smallCardHeader}
                style={{ backgroundColor: "#00500B" }}
              ></div>
              <div className={styles.smallCardContent}>
                <h3 className={styles.smallCardTitle}>
                  JavaScript Intermediate
                </h3>
              </div>
            </div>
            <div className={styles.smallCard}>
              <div
                className={styles.smallCardHeader}
                style={{ backgroundColor: "#00500B" }}
              ></div>
              <div className={styles.smallCardContent}>
                <h3 className={styles.smallCardTitle}>
                  JavaScript Professional
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.coursesContainer}>
            <KernedCard
              title="JavaScript Fundamentals"
              description="A beginner course on how to use JavaScript."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#00500B"
              onClick={handleJSFundamentalsClick}
            />
            <KernedCard
              title="JavaScript console logging"
              description="A beginner course on how to use JavaScript."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#00500B"
            />
            <KernedCard
              title="JavaScript Variables"
              description="A beginner course on how to use JavaScript."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#00500B"
            />
            <KernedCard
              title="JavaScript Function"
              description="A beginner course on how to use JavaScript."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#00500B"
            />
            <KernedCard
              title="JavaScript Arrays"
              description="A beginner course on how to use JavaScript."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#00500B"
            />
            <KernedCard
              title="JavaScript Objects"
              description="A beginner course on how to use JavaScript."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="10 hours"
              headerColor="#00500B"
            />
          </div>
        </main>
      </div>
      <Footer theme="javascript" />
    </>
  );
}
