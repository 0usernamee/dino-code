"use client";
import React, { useState } from "react";
import styles from "./LessonOverlay.module.css";

export default function LessonOverlay({
  isOpen,
  onClose,
  lessonNumber,
  lessonTitle,
  totalPages = 1,
  svgFolder = "html-fundamentals",
}) {
  const [activeSlide, setActiveSlide] = useState(0); // 0-indexed

  if (!isOpen) return null;

  const handlePrevious = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleNext = () => {
    if (activeSlide < totalPages - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handleClose = () => {
    setActiveSlide(0); // Reset to first page when closing
    onClose();
  };

  // Get the visible cards (previous, current, next)
  const getVisibleCards = () => {
    const cards = [];

    // Previous card
    if (activeSlide > 0) {
      cards.push({
        svgPath: `/${svgFolder}/Lesson ${activeSlide}.svg`,
        position: "prev",
        lessonNum: activeSlide,
      });
    }

    // Current card
    cards.push({
      svgPath: `/${svgFolder}/Lesson ${activeSlide + 1}.svg`,
      position: "active",
      lessonNum: activeSlide + 1,
    });

    // Next card
    if (activeSlide < totalPages - 1) {
      cards.push({
        svgPath: `/${svgFolder}/Lesson ${activeSlide + 2}.svg`,
        position: "next",
        lessonNum: activeSlide + 2,
      });
    }

    // Debug logging
    console.log("Visible cards:", cards);
    return cards;
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Lesson {lessonNumber}: {lessonTitle}
          </h2>
          <button className={styles.closeButton} onClick={handleClose}>
            ✕
          </button>
        </div>

        {/* Page Indicator */}
        <div className={styles.pageIndicator}>
          Page {activeSlide + 1} of {totalPages}
        </div>

        {/* Carousel Content Area */}
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            {getVisibleCards().map((card) => (
              <div
                key={card.lessonNum}
                className={`${styles.card} ${styles[card.position + "Card"]}`}
                onClick={() => {
                  if (card.position === "prev") handlePrevious();
                  if (card.position === "next") handleNext();
                }}
              >
                <img
                  src={card.svgPath}
                  alt={`Lesson ${card.lessonNum}`}
                  className={styles.cardImage}
                  onError={(e) => {
                    console.log("Failed to load SVG:", card.svgPath);
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navigation}>
          <button
            className={`${styles.navButton} ${
              activeSlide === 0 ? styles.disabled : ""
            }`}
            onClick={handlePrevious}
            disabled={activeSlide === 0}
          >
            Previous
          </button>

          {activeSlide === totalPages - 1 ? (
            <button
              className={`${styles.navButton} ${styles.completeButton}`}
              onClick={() => {
                // Navigate to quiz page
                window.location.href = "/quiz/core-web-technology";
                // Or use Next.js router: router.push('/quiz/core-web-technology');
              }}
            >
              Quiz Time!
            </button>
          ) : (
            <button className={styles.navButton} onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
