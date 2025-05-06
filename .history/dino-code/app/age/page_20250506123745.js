import SelectionButton from "../components/selectionButton";
import styles from "@/age/page.module.css";

export default function Age() {
    return (
        <>
            <div className={styles.container}></div>
            <h1>Question?</h1>
            <SelectionButton selectionText='Select this' />
        </>
    );
}
