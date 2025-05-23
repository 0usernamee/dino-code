"use client";
import { useState, useEffect } from "react";
import styles from "./CoreWebQuiz.module.css";

export default function CoreWebQuiz({ 
  isOpen, 
  onClose, 
  onReset,
  quizTitle = "Core Web Technology Quiz",
  questions: propQuestions 
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  // Fisher-Yates shuffle function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const defaultQuestions = [
    {
      id: 1,
      type: "complete-sentence",
      prompt: "Complete the sentence:",
      codeText: "The <h1> tag is used to add a",
      blankWord: "paragraph",
      codeEnd: "to a webpage.",
      correctAnswer: "main heading",
      options: ["paragraph", "main heading", "link"],
      explanation: {
        correct: "Correct! <h1> is the largest and most important heading.",
        incorrect: {
          "paragraph": "Not quite! Paragraphs use the <p> tag",
          "link": "Oops! Links use the <a> tag"
        }
      }
    },
    {
      id: 2,
      type: "complete-sentence", 
      prompt: "Complete the sentence:",
      codeText: "The <p> tag is used to add a",
      blankWord: "heading",
      codeEnd: "to a webpage.",
      correctAnswer: "paragraph",
      options: ["heading", "paragraph", "image"],
      explanation: {
        correct: "Correct! <p> stands for paragraph and is used to create blocks of text content.",
        incorrect: {
          "heading": "Not quite! Headings use tags like <h1>, <h2>, etc.",
          "image": "Oops! Images use the <img> tag"
        }
      }
    },
    {
      id: 3,
      type: "complete-sentence",
      prompt: "Complete the sentence:", 
      codeText: "The <a> tag is used to add a",
      blankWord: "button",
      codeEnd: "to a webpage.",
      correctAnswer: "link",
      options: ["button", "link", "text"],
      explanation: {
        correct: "<a> stands for anchor, which creates links!",
        incorrect: {
          "button": "Not quite! Buttons use the <button> tag",
          "text": "Oops! Text uses tags like <p> or <span>"
        }
      }
    },
    {
      id: 4,
      type: "complete-sentence",
      prompt: "Complete the sentence:",
      codeText: "The <img> tag is used to add an",
      blankWord: "link",
      codeEnd: "to a webpage.",
      correctAnswer: "image",
      options: ["link", "image", "video"],
      explanation: {
        correct: "<img> displays images on web pages!",
        incorrect: {
          "link": "Not quite! Links use the <a> tag",
          "video": "Oops! Videos use the <video> tag"
        }
      }
    },
    {
      id: 5,
      type: "complete-sentence",
      prompt: "Complete the sentence:",
      codeText: "The <div> tag is used to create a",
      blankWord: "heading",
      codeEnd: "element.",
      correctAnswer: "container",
      options: ["heading", "container", "table"],
      explanation: {
        correct: "<div> creates containers to group other elements!",
        incorrect: {
          "heading": "Not quite! Headings use tags like <h1>, <h2>, etc.",
          "table": "Oops! Tables use the <table> tag"
        }
      }
    }
  ];

  const questions = propQuestions || defaultQuestions;

  const currentQ = questions[currentQuestion];
  const totalQuestions = questions.length;

  // Shuffle options only when question changes
  useEffect(() => {
    if (currentQ?.options) {
      setShuffledOptions(shuffleArray(currentQ.options));
    }
  }, [currentQuestion]);

  if (!isOpen) return null;

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleCheck = () => {
    const correct = selectedAnswer === currentQ.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleTryAgain = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Quiz completed - show completion screen
      setQuizCompleted(true);
    }
  };

  const handleContinue = () => {
    // Add EXP reward logic here
    console.log("User earned +1 EXP!");
    // Mark quiz as completed
    localStorage.setItem('coreWebTechCompleted', 'true');
    // Go back to the previous page
    window.history.back();
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const handleResetCurrentQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  // Show completion screen
  if (quizCompleted) {
    return (
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.completionScreen}>
            <button className={styles.closeButton} onClick={onClose}>
              ✕
            </button>
            
            <div className={styles.completionContent}>
              <div className={styles.completionIcon}>
                <div className={styles.checkIcon}>✓</div>
              </div>
              
              <h2 className={styles.completionTitle}>Quiz Complete!</h2>
              
              <div className={styles.rewardSection}>
                <p className={styles.rewardText}>Your Reward</p>
                <div className={styles.expReward}>+1 EXP</div>
              </div>
              
              <button className={styles.continueButton} onClick={handleContinue}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            {Array.from({ length: totalQuestions }, (_, i) => (
              <div
                key={i}
                className={`${styles.progressSegment} ${
                  i <= currentQuestion ? styles.active : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Question */}
        <div className={styles.questionSection}>
          <div className={styles.questionContent}>
            <div className={styles.questionHeader}>
              <h2 className={styles.questionTitle}>Question {currentQ.id}</h2>
            </div>
            <p className={styles.questionPrompt}>{currentQ.prompt}</p>

            {/* Code Block */}
            <div className={styles.codeBlock}>
              <span className={styles.codeText}>{currentQ.codeText.split('<')[0]}</span>
              <span className={styles.codeTag}>&lt;{currentQ.codeText.split('<')[1].split('>')[0]}&gt;</span>
              <span className={styles.codeText}>{currentQ.codeText.split('>')[1]} </span>
              {selectedAnswer ? (
                <span className={`${styles.codeHighlight} ${showFeedback && !isCorrect ? styles.codeHighlightError : ''}`}>
                  {selectedAnswer}
                </span>
              ) : (
                <span className={styles.inputSpace}>
                  <span className={styles.terminalCursor}></span>
                </span>
              )}
              <span className={styles.codeText}> {currentQ.codeEnd}</span>
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={styles.feedback}>
                <div className={styles.feedbackIcon}>
                  {isCorrect ? (
                    <div className={styles.checkIcon}>✓</div>
                  ) : (
                    <div className={styles.xIcon}>✕</div>
                  )}
                </div>
                <p className={styles.feedbackText}>
                  {isCorrect 
                    ? `Correct! ${currentQ.explanation.correct}` 
                    : typeof currentQ.explanation.incorrect === 'object' 
                      ? currentQ.explanation.incorrect[selectedAnswer] 
                      : currentQ.explanation.incorrect
                  }
                </p>
              </div>
            )}
          </div>

          {/* Bottom Section - Options and Actions */}
          <div className={styles.bottomSection}>
            {/* Answer Options */}
            {!showFeedback && (
              <div className={styles.optionsContainer}>
                {shuffledOptions.map((option) => (
                  <button
                    key={option}
                    className={`${styles.optionButton} ${
                      selectedAnswer === option ? styles.selected : ""
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* Action Button */}
            <div className={styles.actionContainer}>
              <button 
                className={styles.resetButton} 
                onClick={handleResetCurrentQuestion} 
                title="Reset Question"
              >
                <img src="/reset.svg" alt="Reset" className={styles.resetIcon} />
              </button>
              
              {!showFeedback ? (
                <button
                  className={`${styles.checkButton} ${!selectedAnswer ? styles.disabled : ""}`}
                  onClick={handleCheck}
                  disabled={!selectedAnswer}
                >
                  Check
                </button>
              ) : isCorrect ? (
                <button className={styles.nextButton} onClick={handleNextQuestion}>
                  Next question
                </button>
              ) : (
                <button className={styles.tryAgainButton} onClick={handleTryAgain}>
                  Try again
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 