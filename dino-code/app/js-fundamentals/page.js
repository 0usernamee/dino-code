"use client";
import React, { useState } from "react";
import LessonCard from "../components/LessonCard";
import LessonOverlay from "../components/LessonOverlay";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export default function JSFundamentalsPage() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "JS Core of Web Technology",
      isCompleted: false,
      pages: 3,
      svgFolder: "js-fundamentals/coreWeb",
    },
    { id: 2, title: "JavaScript Programming", isCompleted: false, pages: 0 },
    { id: 3, title: "Syntax", isCompleted: false, pages: 0 },
    { id: 4, title: "Case Sensitivity", isCompleted: false, pages: 0 },
    { id: 5, title: "Error Codes", isCompleted: false, pages: 0 },
  ]);

  const handleLessonClick = (lesson) => {
    if (lesson.pages > 0) {
      setSelectedLesson(lesson);
    } else {
      // Could show a "Coming Soon" message or do nothing
      console.log(`${lesson.title} - Coming Soon!`);
    }
  };

  const handleCloseOverlay = () => {
    setSelectedLesson(null);
  };

  // Calculate progress
  const completedLessons = lessons.filter(
    (lesson) => lesson.isCompleted
  ).length;
  const totalLessons = lessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <>
      <NavBar theme="js" />
      <div className={styles.container}>
        <main className={styles.main}>
          {/* Page Title */}
          <h1 className={styles.pageTitle}>JavaScript Fundamentals</h1>

          {/* Progress Card */}
          <div className={styles.progressCard}>
            <h2 className={styles.progressTitle}>JavaScript Fundamentals</h2>
            <div className={styles.progressInfo}>
              <span className={styles.progressText}>
                {completedLessons}/{totalLessons}
              </span>
              <span className={styles.progressLabel}>Lessons</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Lesson Cards */}
          <div className={styles.lessonsContainer}>
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                title={lesson.title}
                isCompleted={lesson.isCompleted}
                headerColor="#00500B"
                onClick={() => handleLessonClick(lesson)}
              />
            ))}
          </div>
        </main>
      </div>

      <Footer theme="javascript" />

      {/* Lesson Overlay */}
      {selectedLesson && (
        <LessonOverlay
          isOpen={!!selectedLesson}
          onClose={handleCloseOverlay}
          lessonNumber={selectedLesson.id}
          lessonTitle={selectedLesson.title}
          totalPages={selectedLesson.pages}
          svgFolder={selectedLesson.svgFolder}
        />
      )}
    </>
  );
}
