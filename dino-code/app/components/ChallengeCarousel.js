"use client";

import { useReducer, useRef, useEffect } from "react";
import styles from "./ChallengeCarousel.module.css";

// Reducer function for state management
function carouselReducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_INDEX":
      return { ...state, activeIndex: action.payload };
    case "SET_CURRENT_WEEK":
      return { ...state, currentWeek: action.payload };
    case "UPDATE_CHALLENGES":
      return { ...state, challenges: action.payload };
    case "SET_IS_DRAGGING":
      return { ...state, isDragging: action.payload };
    default:
      return state;
  }
}

export default function ChallengeCarousel() {
  // Using useReducer instead of useState
  const [state, dispatch] = useReducer(carouselReducer, {
    activeIndex: 0,
    currentWeek: [],
    isDragging: false,
    challenges: [
      {
        id: 1,
        title: "Daily Challenge#12",
        type: "daily",
        score: null,
        streak: 15,
        activeDays: [11, 12], // Will be updated with real dates
        buttonText: "See Results",
        color: "#005c0b",
        textColor: "#005c0b",
      },
      {
        id: 2,
        title: "CSS",
        type: "css",
        score: { current: 0, total: 10 },
        streak: null,
        activeDays: [], // Will be updated with real dates
        buttonText: "Start Streak",
        color: "#5b64c2",
        textColor: "#5b64c2",
      },
      {
        id: 3,
        title: "JavaScript",
        type: "javascript",
        score: { current: 2, total: 10 },
        streak: 2,
        activeDays: [], // Will be updated with real dates
        buttonText: "Continue Streak",
        color: "#fb7e6e",
        textColor: "#fb7e6e",
      },
      {
        id: 4,
        title: "HTML",
        type: "html",
        score: { current: 0, total: 10 },
        streak: null,
        activeDays: [], // Will be updated with real dates
        buttonText: "Start Streak",
        color: "#8f338e",
        textColor: "#8f338e",
      },
    ],
  });

  // Touch tracking refs
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const dragStartX = useRef(null);
  const dragEndX = useRef(null);
  const minSwipeDistance = 50;

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Calculate current week dates
  useEffect(() => {
    const now = new Date();
    const currentDay = now.getDate();
    const currentDayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Calculate the date for Sunday of the current week
    const sundayDate = currentDay - currentDayOfWeek;

    // Generate an array of dates for the current week
    const weekDays = Array.from({ length: 7 }, (_, i) => sundayDate + i);

    dispatch({ type: "SET_CURRENT_WEEK", payload: weekDays });

    // Update challenges with real dates for active days
    const updatedChallenges = state.challenges.map((challenge) => {
      let activeDays = [];

      // For demo purposes, assign some active days based on challenge type
      if (challenge.type === "daily") {
        // Daily challenge - first two days of the week (like in the image)
        activeDays = [weekDays[0], weekDays[1]];
      } else if (challenge.type === "css") {
        // CSS - first two days of the week
        activeDays = [weekDays[0], weekDays[1]];
      } else if (challenge.type === "javascript") {
        // JavaScript - middle of the week
        activeDays = [weekDays[2], weekDays[3]];
      }
      // HTML has no active days

      return {
        ...challenge,
        activeDays,
      };
    });

    dispatch({ type: "UPDATE_CHALLENGES", payload: updatedChallenges });
  }, []);

  const handleDotClick = (index) => {
    dispatch({ type: "SET_ACTIVE_INDEX", payload: index });
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && state.activeIndex < state.challenges.length - 1) {
      dispatch({ type: "SET_ACTIVE_INDEX", payload: state.activeIndex + 1 });
    } else if (isRightSwipe && state.activeIndex > 0) {
      dispatch({ type: "SET_ACTIVE_INDEX", payload: state.activeIndex - 1 });
    }

    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse drag events (desktop support)
  const handleMouseDown = (e) => {
    dispatch({ type: "SET_IS_DRAGGING", payload: true });
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (state.isDragging) {
      dragEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (
      state.isDragging &&
      dragStartX.current !== null &&
      dragEndX.current !== null
    ) {
      const distance = dragStartX.current - dragEndX.current;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe && state.activeIndex < state.challenges.length - 1) {
        dispatch({ type: "SET_ACTIVE_INDEX", payload: state.activeIndex + 1 });
      } else if (isRightSwipe && state.activeIndex > 0) {
        dispatch({ type: "SET_ACTIVE_INDEX", payload: state.activeIndex - 1 });
      }
    }

    dispatch({ type: "SET_IS_DRAGGING", payload: false });
    dragStartX.current = null;
    dragEndX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "ArrowRight" &&
        state.activeIndex < state.challenges.length - 1
      ) {
        dispatch({ type: "SET_ACTIVE_INDEX", payload: state.activeIndex + 1 });
      } else if (e.key === "ArrowLeft" && state.activeIndex > 0) {
        dispatch({ type: "SET_ACTIVE_INDEX", payload: state.activeIndex - 1 });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [state.activeIndex, state.challenges.length]);

  // Function to conditionally join class names
  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: state.isDragging ? "grabbing" : "grab" }}
      >
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${state.activeIndex * 100}%)` }}
        >
          {state.challenges.map((challenge) => (
            <div key={challenge.id} className={styles.carouselSlide}>
              <div className={styles.card}>
                <div
                  className={styles.cardHeader}
                  style={{ backgroundColor: challenge.color }}
                >
                  <div className={styles.headerContent}>
                    <div className={styles.flameIcon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C10.9052 2 9.91037 2.76728 9.17157 4.24264C8.43277 5.71799 8 7.81084 8 10C8 11.0396 8.40201 12.0146 8.80265 12.9125C9.10403 13.5946 9.4418 14.2318 9.78689 14.8122C10.1345 15.3971 10.4983 15.9372 10.8398 16.4083C11.1845 16.8831 11.5318 17.3116 11.8124 17.6605C11.8705 17.7322 11.9251 17.7987 11.9756 17.8591C11.9835 17.8685 11.9913 17.8776 11.999 17.8865C12.0001 17.8878 12.0011 17.889 12.0022 17.8902C12.0033 17.8915 12.0045 17.8929 12.0057 17.8943C12.0358 17.9302 12.0657 17.9658 12.0953 18.0009C12.3028 18.2398 12.5 18.4535 12.5 18.4535C12.5 18.4535 12.6972 18.2398 12.9047 18.0009C12.9343 17.9658 12.9642 17.9302 12.9943 17.8943C12.9955 17.8929 12.9967 17.8915 12.9978 17.8902C12.9989 17.889 12.9999 17.8878 13.001 17.8865C13.0087 17.8776 13.0165 17.8685 13.0244 17.8591C13.0749 17.7987 13.1295 17.7322 13.1876 17.6605C13.4682 17.3116 13.8155 16.8831 14.1602 16.4083C14.5017 15.9372 14.8655 15.3971 15.2131 14.8122C15.5582 14.2318 15.896 13.5946 16.1974 12.9125C16.598 12.0146 17 11.0396 17 10C17 7.81084 16.5672 5.71799 15.8284 4.24264C15.0896 2.76728 14.0948 2 13 2H12Z"
                          fill="#FF7900"
                        />
                      </svg>
                    </div>
                    {challenge.streak && (
                      <div className={styles.streakBadge}>
                        x{challenge.streak}
                      </div>
                    )}
                    <h2 className={styles.cardTitle}>{challenge.title}</h2>
                  </div>
                  {challenge.score && (
                    <div className={styles.scoreDisplay}>
                      {challenge.score.current}/{challenge.score.total}
                    </div>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.calendarGrid}>
                    {days.map((day, index) => (
                      <div key={day} className={styles.calendarDay}>
                        <div className={styles.dayLabel}>{day}</div>
                        <div
                          className={cn(
                            styles.dayNumber,
                            challenge.activeDays.includes(
                              state.currentWeek[index]
                            )
                              ? styles.activeDay
                              : ""
                          )}
                          style={
                            challenge.activeDays.includes(
                              state.currentWeek[index]
                            )
                              ? { backgroundColor: challenge.color }
                              : {}
                          }
                        >
                          {state.currentWeek[index] || index + 1}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.actionButtonContainer}>
                    <button
                      className={styles.actionButton}
                      style={{ color: challenge.textColor }}
                    >
                      {challenge.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating indicators that don't move with the cards */}
        <div className={styles.floatingIndicators}>
          {state.challenges.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                styles.indicator,
                state.activeIndex === index ? styles.activeIndicator : ""
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
