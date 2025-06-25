import {FaHtml5,FaCss3Alt,FaJs,FaBootstrap,FaDatabase,FaJava} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML",
    desc: "Markup language for web pages.",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS",
    desc: "Stylesheet language for web design.",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    desc: "Interactive and dynamic web content.",
  },
  {
    icon: <FaBootstrap />,
    name: "Bootstrap",
    desc: "CSS framework for responsive sites.",
  },
  {
    icon: <FaDatabase />,
    name: "SQL",
    desc: "Managing and querying databases.",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    desc: "React framework for SSR and SSG.",
  },
  {
    icon: <FaJava />,
    name: "Java",
    desc: "General-purpose programming language.",
  },
];

export default function Skills() {
  const [center, setCenter] = useState(2); 

  const prev = () => setCenter((c) => (c - 1 + skills.length) % skills.length);
  const next = () => setCenter((c) => (c + 1) % skills.length);

  useEffect(() => {
    const timer = setInterval(next, 3000); // Rotate every 3 seconds
    return () => clearInterval(timer);
  }, [center]);

  // Get indices for left, center, right
  const left = (center - 1 + skills.length) % skills.length;
  const right = (center + 1) % skills.length;

  return (
    <main className={styles.skillMain}>
      <div className={styles.carouselWrapper}>
        <button className={styles.carouselBtn} onClick={prev}>
          &lt;
        </button>
        <div className={styles.carousel}>
          {[left, center, right].map((idx, i) => (
            <div
              key={skills[idx].name}
              className={
                i === 1 ? styles.carouselCardCenter : styles.carouselCardSide
              }
            >
              <div className={styles.icon}>{skills[idx].icon}</div>
              <strong>{skills[idx].name}</strong>
              <p>{skills[idx].desc}</p>
            </div>
          ))}
        </div>
        <button className={styles.carouselBtn} onClick={next}>
          &gt;
        </button>
      </div>
    </main>
  );
}