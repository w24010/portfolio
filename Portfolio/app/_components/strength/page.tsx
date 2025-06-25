import Link from "next/link";
import styles from "./page.module.css";

export default function Features() {
  return (
    <div className={styles.featuresGrid}>
      <Link href="/feature1" className={styles.featureBox}>
        <span> Team player </span>
      </Link>
      <Link href="/feature2" className={styles.featureBox}>
        <span> Efficient </span>
      </Link>
      <Link href="/feature3" className={styles.featureBox}>
        <span> Creative </span>
      </Link>
      <Link href="/feature4" className={styles.featureBox}>
        <span> Adaptation </span>
      </Link>
    </div>
  );
}
