"use client";
import React, { useState, useEffect } from "react";
import LessonCard from "../components/LessonCard";
import LessonOverlay from "../components/LessonOverlay";
import NavBar from "../components/Navbar";
import styles from "./page.module.css";

export default function HTMLFundamentalsPage() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "The Core Web Technology",
      isCompleted: false,
      pages: 5,
      svgFolder: "html-fundamentals/coreWeb",
    },
    { id: 2, title: "HTML Code", isCompleted: false, pages: 0 },
    { id: 3, title: "Headings", isCompleted: false, pages: 0 },
    { id: 4, title: "Images", isCompleted: false, pages: 0 },
    { id: 5, title: "Document Setup", isCompleted: false, pages: 0 },
  ]);

  // Check completion status on component mount
  useEffect(() => {
    const coreWebCompleted =
      localStorage.getItem("coreWebTechCompleted") === "true";

    setLessons((prevLessons) =>
      prevLessons.map((lesson) =>
        lesson.id === 1 ? { ...lesson, isCompleted: coreWebCompleted } : lesson
      )
    );
  }, []);

  // Check completion status when page becomes visible (user returns from quiz)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const coreWebCompleted =
          localStorage.getItem("coreWebTechCompleted") === "true";

        setLessons((prevLessons) =>
          prevLessons.map((lesson) =>
            lesson.id === 1
              ? { ...lesson, isCompleted: coreWebCompleted }
              : lesson
          )
        );
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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
      <NavBar theme="html" />
      <div className={styles.container}>
        <main className={styles.main}>
          {/* Page Title */}
          <h1 className={styles.pageTitle}>HTML Fundamentals</h1>

          {/* Progress Card */}
          <div className={styles.progressCard}>
            <h2 className={styles.progressTitle}>HTML Fundamentals</h2>
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
                headerColor="#FB7E6E"
                onClick={() => handleLessonClick(lesson)}
              />
            ))}
          </div>
        </main>
      </div>

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
