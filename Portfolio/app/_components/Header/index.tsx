"use client";

import { use, useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && currentScroll > 80) {
        setShow(false); // Hide on scroll down
      } else {
        setShow(true); // Show on scroll up
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${!show ? styles.hide : ""}`}>
      <h1>
        <Link href="/">Portfolio</Link>
      </h1>
      <nav>
        <ul className={styles.items}>
          <li><Link href="#about">about</Link></li>
          <li><Link href="#profile">profile</Link></li>
          <li><Link href="#skills">skills</Link></li>
          <li><Link href="#strength">strength</Link></li>
          <li><Link href="#works">works</Link></li>
        </ul>
      </nav>
    </header>
  );
}
