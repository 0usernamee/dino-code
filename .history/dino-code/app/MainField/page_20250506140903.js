import SelectionButton from "../components/selectionButton";
import styles from "@/app/age/page.module.css";
// import { useRouter } from "next/router";

export default function Age() {
    // const router = useRouter();

    // const handleSelection = (selection) => {
    //     router.push(`/age`);
    // };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h1 className={styles.question}>
                        Whats your main field of study?
                    </h1>
                    <SelectionButton selectionText='Software Development' />
                    <SelectionButton selectionText='Marketing' />
                    <SelectionButton selectionText='Design' />
                    <SelectionButton selectionText='Product Management' />
                    <SelectionButton selectionText='Data' />
                    <SelectionButton selectionText='Finance' />
                    <SelectionButton selectionText='Other' />
                </div>
            </div>
        </>
    );
}
