'use client';
import Navbar from "../components/Navbar";
import styles from './page.module.css';
import { MdRefresh } from "react-icons/md";
import QuizResult from "./result/page";
import { useState } from "react";

export default function QuizOnboarding() {
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [selectedButton, setSelectedButton] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);

    const options = ["Paragraph", "Main Heading", "Link"];
    const correctAnswer = options[1]; 

    function onSelectButton(buttonText) {
        setSelectedButton(buttonText);
        setIsResultVisible(false); 
    }

    function onCheck() {
        if (!selectedButton) return; 
        setIsCorrect(selectedButton === correctAnswer);
        setIsResultVisible(true);
    }

    function onRefresh() {
        setSelectedButton("");
        setIsResultVisible(false);
        setIsCorrect(null);
    }

    return (
        <div>
            <Navbar />
            <div className={styles.progress}>
                <progress value={1} max={3} />
            </div>
            <div className={styles.container}>
                <main className={styles.quizContainer}>
                    <div>
                        <h1 className={styles.quizQuestion}>Question 1</h1>
                        <span className={styles.quizQuestion}>Complete the sentence:</span>
                    </div>
                    <span className={styles.quizContent}>
                        The &lt;h1&gt; tag is used to add a paragraph to a webpage.
                    </span>
                    <QuizResult
                        visible={isResultVisible}
                        success={isCorrect}
                    />
                </main>
                <footer className={styles.footer}>
                    <div className={styles.buttonContainer}>
                        {options.map(option => (
                            <button
                                key={option}
                                onClick={() => onSelectButton(option)}
                                className={`${styles.quizButton} ${selectedButton === option ? styles.selected : ""}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.mainButton} onClick={onRefresh}>
                            <MdRefresh className={styles.refreshIcon} />
                        </button>
                        <button
                            className={styles.mainButton}
                            onClick={onCheck}
                            disabled={!selectedButton}
                        >
                            Check
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
}