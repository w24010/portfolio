"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./page.module.css";

export default function Feature1() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      paraRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className={styles.centeredFeature}>
      <h1 ref={headingRef}>Feature 1</h1>
      <p ref={paraRef}>This page has a GSAP entrance animation!</p>
    </div>
  );
}
