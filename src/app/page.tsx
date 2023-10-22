"use client";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    window.location.href = "/signup";
  }, []);

  return <main className={styles.main}></main>;
}
