"use client";
import styles from "./selectionButton.module.css";

export default function SocialButton({ selectionText }) {
    return (
        <>
            ,<div className={styles.selection_box}>{selectionText}</div>
        </>
    );
}
