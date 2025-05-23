"use client";
import styles from "./selectionButton.module.css";
import Link from "next/link";

export default function SelectionButton({ selectionText, href }) {
    const content = <div className={styles.selection_box}>{selectionText}</div>;
    return href ? <Link href={href}>{content}</Link> : content;
}
