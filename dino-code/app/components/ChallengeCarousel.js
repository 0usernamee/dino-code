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
        activeDays: [11, 12], // may be updated with real dates
        buttonText: "See Results",
        color: "#005c0b",
        textColor: "#000000",
      },
      {
        id: 2,
        title: "CSS",
        type: "css",
        score: { current: 0, total: 10 },
        streak: null,
        activeDays: [], // may be updated with real dates
        buttonText: "Start Streak",
        color: "#5b64c2",
        textColor: "#000000",
      },
      {
        id: 3,
        title: "JavaScript",
        type: "javascript",
        score: { current: 2, total: 10 },
        streak: 2,
        activeDays: [], // may be updated with real dates
        buttonText: "Continue Streak",
        color: "#fb7e6e",
        textColor: "#000000",
      },
      {
        id: 4,
        title: "HTML",
        type: "html",
        score: { current: 0, total: 10 },
        streak: null,
        activeDays: [], // may be updated with real dates
        buttonText: "Start Streak",
        color: "#8f338e",
        textColor: "#000000",
      },
    ],
  });

  // mouse tracking refs
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const dragStartX = useRef(null);
  const dragEndX = useRef(null);
  const minSwipeDistance = 50;

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // calculate current week dates
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
                        width="40"
                        height="39"
                        viewBox="0 0 42 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.2759 46.9385C31.7221 45.4162 41.3499 39.9529 41.3499 25.8258C41.3499 12.9698 32.1232 4.40904 25.4886 0.475467C24.0164 -0.397407 22.293 0.750512 22.293 2.48727V6.92958C22.293 10.4326 20.849 16.8267 16.8363 19.4863C14.7877 20.8441 12.5752 18.8118 12.3262 16.3329L12.1218 14.2974C11.8841 11.931 9.52109 10.4945 7.66674 11.9373C4.33538 14.5292 0.853996 19.0679 0.853996 25.8258C0.853996 43.1023 13.4527 47.4215 19.752 47.4215C20.1184 47.4215 20.5035 47.4103 20.9045 47.3867C17.7939 47.1156 12.7645 45.1472 12.7645 38.7824C12.7645 33.8036 16.326 30.4353 19.0319 28.7981C19.7596 28.3576 20.6115 28.9295 20.6115 29.7925V31.2239C20.6115 32.3194 21.0269 34.032 22.0157 35.2042C23.1348 36.5307 24.7773 35.141 24.9097 33.3964C24.9517 32.8461 25.4943 32.4953 25.9617 32.774C27.4893 33.6846 29.4393 35.6296 29.4393 38.7824C29.4393 43.758 26.7499 46.0469 24.2759 46.9385Z"
                          fill="#FF8D00"
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
