import SelectionButton from "../components/selectionButton";
import styles from "@/app/age/page.module.css";

export default function Age() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h1>Question?</h1>
                    <SelectionButton selectionText='Select this' />
                </div>
            </div>
        </>
    );
}
