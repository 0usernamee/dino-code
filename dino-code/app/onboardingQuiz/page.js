import Navbar from "../components/Navbar";
import styles from './page.module.css';

export default function OnboardingQuiz() {
    return (
      <div>
        <Navbar/>
        <div className={styles.progress}>
                <progress value={1} max={3} />
            </div>
            <div className={styles.quizContainer}>
                <div>
                    <h1 className={styles.quizQuestion} >Question 1</h1>
                    <span className={styles.quizQuestion}>Complete the sentence:</span>
                </div>
                <span className={styles.quizContent}>To group a set of related form elements under a common label, use the _____ tag.</span>
            </div>
        </div>
    )
}
