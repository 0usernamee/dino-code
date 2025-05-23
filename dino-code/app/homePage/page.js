import React from "react";
import Link from "next/link";
import ChallengeCarousel from "../components/ChallengeCarousel";
import KernedCard from "../components/KernedCard";
import styles from "./page.module.css";
import NavBar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        {/* Header and greeting */}
        <div className={styles.headerSection}>
          <div className={styles.greetingGroup}>
            <h1 className={styles.greeting}>Hi, David</h1>
          </div>
          <div className={styles.profileGroup}>
            {/* Raw test: local image, no className or styling */}
            <img src="/Profilepic.png" alt="Profile" />
            <div className={styles.expBadge}>28 EXP</div>
          </div>
        </div>
        {/* Search bar (styled div with icon and placeholder) */}
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
              Find your lesson...
            </span>
          </div>
        </div>
        {/* Challenge Carousel */}
        <div className={styles.carouselWrapper}>
          <ChallengeCarousel />
        </div>
        {/* In Progress Section */}
        <div className={styles.progressSection}>
          <div className={styles.progressHeader}></div>
          <div className={styles.progressContent}>
            <h2 className={styles.progressTitle}>In Progress</h2>
            <div className={styles.progressCard}>
              <div className={styles.progressCardTitle}>
                JavaScript Fundamentals
              </div>
              <div className={styles.progressRow}>
                <span className={styles.progressNumber}>4/6</span>
                <span className={styles.progressLessons}>Lessons</span>
              </div>
              <div className={styles.progressBarBg}>
                <div
                  className={styles.progressBarFill}
                  style={{ width: "66%" }}
                ></div>
              </div>
            </div>
            <div className={styles.progressCard}>
              <div className={styles.progressCardTitle}>HTML</div>
              <div className={styles.progressRow}>
                <span className={styles.progressNumber}>4/6</span>
                <span className={styles.progressLessons}>Lessons</span>
              </div>
              <div className={styles.progressBarBg}>
                <div
                  className={styles.progressBarFill}
                  style={{ width: "66%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* See all lessons */}
        <Link href="/lessons" className={styles.lessonsHeaderLink}>
          <div className={styles.lessonsHeader}>
            <span className={styles.lessonsTitle}>See all lessons</span>
            <span className={styles.lessonsArrow}>→</span>
          </div>
        </Link>
        {/* Lesson Cards Slider */}
        <div className={styles.cardsRow}>
          <div className={styles.cardWrapper}>
            <KernedCard
              title="The Fundamentals of HTML"
              description="Every site you use is built with HTML! With this course, you'll be able to understand simple HTML syntax."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="1 hour"
              headerColor="#fb7e6e"
            />
          </div>
          <div className={styles.cardWrapper}>
            <KernedCard
              title="The Fundamentals of CSS"
              description="Learn the basics of CSS to style your web pages."
              progress={{ current: 0, total: 10 }}
              difficulty="Beginner"
              duration="1 hour"
              headerColor="#5b64c2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function KernedCardExamplePage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Kerned Card Example</h1>

      <div className={styles.cardContainer}>
        <KernedCard
          title="Learn HTML"
          description="A beginner course on the fundamentals of HTML"
          progress={{ current: 0, total: 10 }}
          difficulty="Beginner"
          duration="10 hours"
          headerColor="#fb7e6e"
        />
      </div>
    </main>
  );
}
