import SelectionButton from "../components/selectionButton";
import styles from "@/app/age/page.module.css";
import { useRouter } from "next/router";

export default function Age() {
    const router = useRouter();

    const handleSelection = (selection) => {
        router.push(`/age`);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h1 className={styles.question}>Question?</h1>
                    <SelectionButton selectionText='Select this' />
                </div>
            </div>
        </>
    );
}
