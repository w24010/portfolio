"use client";
import { useRef } from "react";
import styles from "./page.module.css";

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLSelectElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const age = ageRef.current?.value;
    const desc = descRef.current?.value.trim();

    if (!desc) {
      alert("Description is required.");
      return;
    }

    const mailto = `mailto:your@email.com?subject=Contact from ${encodeURIComponent(
      name || "Anonymous"
    )}&body=${encodeURIComponent(
      `Name: ${name || "Anonymous"}\nEmail: ${email || "Not provided"}\nAge: ${
        age || "Not specified"
      }\n\n${desc}`
    )}`;

    window.location.href = mailto;
  };

  // Generate age options from 10 to 100
  const ageOptions = [];
  for (let i = 10; i <= 100; i++) {
    ageOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className={styles.contactWrapper}>
      <h1 className={styles.contactTitle}>Contact Me</h1>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label className={styles.label}>
          Name:
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Your Name"
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Your Email"
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Age:
          <select
            ref={ageRef}
            name="age"
            className={styles.input}
            defaultValue=""
          >
            <option value="" disabled>
              Age (optional)
            </option>
            {ageOptions}
          </select>
        </label>
        <label className={styles.label}>
          Description: <span className={styles.required}>*</span>
          <textarea
            ref={descRef}
            name="description"
            placeholder="Your message"
            required
            rows={5}
            className={styles.textarea}
          />
        </label>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
}
