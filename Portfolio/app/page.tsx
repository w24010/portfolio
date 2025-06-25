"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Profile from "./_components/profile/page";
import Skills from "./_components/skills/page";
import Strength from "./_components/strength/page";
import Contact from "./_components/contact/page";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const messages = [
  "Welcome to My Portfolio",
  "Explore My Projects",
  "Discover My Skills",
  "Let's Connect!",
  "Your Feedback is Welcome",
  "Thank You for Visiting",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const strengthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>{messages[index]}</h2>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/inst.jpg"
            alt="Profile"
            width={150}
            height={150}
            className={styles.profileImage}
          />
          <div className={styles.imageOverlay}></div>
        </div>
        <section className={styles.introSection}>
          <p>
            If you are interested in learning more about my background,
            experience, or expertise, please explore the sections above.
          </p>
        </section>
      </div>
      <main className={styles.main}>
        <section id="profile">
          <Profile />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="strength">
          <Strength />
        </section>
        <section id="contact">
          <Contact />
        </section>

      </main>
    </main>
  );
}
