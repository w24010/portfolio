"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking a link (mobile UX)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${!show ? styles.hide : ""}`}>
      <h1>
        <Link href="/">Portfolio</Link>
      </h1>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="main-nav"
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        id="main-nav"
        className={menuOpen ? styles.open : ""}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.items}>
          <li>
            <Link href="#about" onClick={handleLinkClick}>
              about
            </Link>
          </li>
          <li>
            <Link href="#profile" onClick={handleLinkClick}>
              profile
            </Link>
          </li>
          <li>
            <Link href="#skills" onClick={handleLinkClick}>
              skills
            </Link>
          </li>
          <li>
            <Link href="#strength" onClick={handleLinkClick}>
              strength
            </Link>
          </li>
          <li>
            <Link href="#works" onClick={handleLinkClick}>
              works
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
