import failImage from './images/fail.png'
import successImage from './images/success.png'
import styles from './page.module.css'

export default function QuizResult({ success, visible }) {
    if (!visible) return null;

    console.log(failImage)
    return (
        success ? (
            <div className={styles.resultContainer}>
                <h2 className={styles.resultText} >Correct! Good Job</h2>
                <img src={successImage.src} />
            </div>
            ) : (
            <div className={styles.resultContainer}>
                <h2 className={styles.resultText}>Not quite! Try again</h2>
                <img src={failImage.src} />
            </div>
            )
    )
}