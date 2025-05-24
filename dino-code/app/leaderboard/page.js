"use client";
import React, { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

const initialFriends = [
  { id: 1, name: "Jesus", xp: 200 },
  { id: 2, name: "Satan", xp: 188 },
  { id: 3, name: "SKIBIDI", xp: 153 },
  { id: 4, name: "Rehands", xp: 137 },
  { id: 5, name: "DieGoP", xp: 110 },
  { id: 6, name: "Brunose", xp: 70 },
  { id: 7, name: "Reaghan", xp: 70 },
  { id: 8, name: "DJarell", xp: 43 },
  { id: 9, name: "Goonwar", xp: 10 },
];

export default function LeaderboardPage() {
  const [friends, setFriends] = useState(initialFriends);
  const [editMode, setEditMode] = useState(false);

  // Sort friends by XP descending
  const sortedFriends = [...friends].sort((a, b) => b.xp - a.xp);

  const handleRemove = (id) => {
    // Add removing class to trigger animation
    const friendElement = document.querySelector(`[data-friend-id="${id}"]`);
    if (friendElement) {
      friendElement.classList.add(styles.removing);
      // Wait for animation to complete before removing from state
      setTimeout(() => {
        setFriends(friends.filter((f) => f.id !== id));
      }, 200); // Match CSS transition duration
    } else {
      // Fallback if element not found
      setFriends(friends.filter((f) => f.id !== id));
    }
  };

  return (
    <>
      <NavBar />
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.leaderboardPageTitle}>Leaderboard</h1>
            <div className={styles.leaderboardCard}>
              <div className={styles.headerRow}>
                <span className={styles.friendsTitle}>Friends</span>
                <button
                  className={styles.editButton}
                  onClick={() => setEditMode((e) => !e)}
                >
                  {editMode ? "Done" : "Edit"}
                </button>
              </div>
              <ul className={styles.friendsList}>
                {sortedFriends.map((friend, idx) => (
                  <li
                    className={styles.friendRow}
                    key={friend.id}
                    data-friend-id={friend.id}
                  >
                    {editMode && (
                      <button
                        className={styles.removeButton}
                        onClick={() => handleRemove(friend.id)}
                        aria-label={`Remove ${friend.name}`}
                      >
                        <span
                          className={
                            styles.minusPill +
                            (editMode ? " " + styles.popIn : "")
                          }
                        ></span>
                      </button>
                    )}
                    <span
                      className={
                        styles.rankCircle +
                        " " +
                        (idx < 3 ? styles.podium : styles.nonPodium) +
                        (editMode ? " " + styles.slideEdit : "")
                      }
                    >
                      {idx + 1}
                    </span>
                    <span
                      className={
                        styles.avatar + (editMode ? " " + styles.slideEdit : "")
                      }
                    ></span>
                    <span
                      className={
                        styles.friendName +
                        (editMode ? " " + styles.slideEdit : "")
                      }
                    >
                      {friend.name}
                    </span>
                    <span className={styles.friendXP}>
                      {friend.xp} <span className={styles.xpLabel}>XP</span>
                    </span>
                  </li>
                ))}
              </ul>
              <button className={styles.inviteButton}>
                Invite more friends! <span className={styles.arrow}>→</span>
              </button>
            </div>
          </main>
          <div className={styles.waveSection}></div>
          <Footer />
        </div>
      </div>
    </>
  );
}
