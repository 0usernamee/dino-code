import SelectionButton from "../components/selectionButton";
import styles from "@/app/age/page.module.css";
import Navbar from "../components/Navbar"

export default function Age() {


    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h1 className={styles.question}>What is your age?</h1>
                    <SelectionButton selectionText='18 or under' />
                    <SelectionButton selectionText='19-24' />
                    <SelectionButton selectionText='25-34' />
                    <SelectionButton selectionText='35-44' />
                    <SelectionButton selectionText='45 or over' />
                </div>
            </div>
        </>
    );
}
