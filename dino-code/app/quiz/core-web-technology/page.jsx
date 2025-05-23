"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import CoreWebQuiz from "../../components/CoreWebQuiz";

export default function CoreWebTechnologyQuizPage() {
  const [showQuiz, setShowQuiz] = useState(true);
  const [quizKey, setQuizKey] = useState(0); // Key to force quiz reset

  const handleQuizClose = () => {
    // Navigate back to lessons or home
    window.location.href = '/dino-code';
    // Or use Next.js router: router.push('/dino-code');
  };

  const handleQuizReset = () => {
    setQuizKey(prev => prev + 1); // Force remount of quiz component
  };

  return (
    <>
      <Navbar theme="html" />
      <CoreWebQuiz 
        key={quizKey}
        isOpen={showQuiz} 
        onClose={handleQuizClose}
        onReset={handleQuizReset}
        quizTitle="Core Web Technology Quiz"
      />
    </>
  );
} 