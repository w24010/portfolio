import Image from "next/image";
import styles from "./page.module.css";
import { useInView } from "../useInView";

export default function Profile() {
  const [imgRef, imgInView] = useInView();
  const [detailsRef, detailsInView] = useInView();
  const [aRef, aInView] = useInView();
  const [bRef, bInView] = useInView();

  return (
    <main className={styles.profileMain}>
      <div className={styles.profileContainer}>
        <div
          ref={imgRef}
          className={`${styles.profileImageWrapper} ${imgInView ? styles.visible : ""}`}
        >
          <Image
            src="/profile1.jpg"
            alt="Profile"
            width={200}
            height={200}
            className={styles.profileImage}
          />
        </div>
        <div
          ref={detailsRef}
          className={`${styles.profileDetails} ${
            detailsInView ? styles.visible : ""
          }`}
        >
          <h2>Nishant Xhettri</h2>
          <p>
            Hello! I am a passionate developer with a keen interest in web
            technologies.
            <br />
            I am from Nepal and currently living in Japan.
            <br />
            I am 23 years old and curently studying web programming at okinawa
            business gaigo gakkuin.
            <br />
            I will be graduating in march of 2026.
            <br />
          </p>
        </div>
      </div>
      <div className={styles.extensionContainer}>
        <div
          ref={aRef}
          className={`${styles.containerA} ${aInView ? styles.visible : ""}`}
        >
          <h3>Details</h3>
          <p>
            Name: Nishant Xhettri
            <br />
            Age: 23
            <br />
            Location: Okinawa, Japan
            <br />
            Education: Okinawa Business Gaigo
            <br />
            Graduation: March 2026
            <br />
            Email:w24010@osfl.ac.jp
            <br />
            Phone: +81 080-6498-6187
            <br />
          </p>
        </div>
        <div
          ref={bRef}
          className={`${styles.containerB} ${bInView ? styles.visible : ""}`}
        >
          <h3>Hobbies & Interests</h3>
          <p>
            In my free time, I love Minecraft, and playing chess. I am also
            passionate about open-source projects and contributing to the
            developer community.
          </p>
        </div>
      </div>
    </main>
  );
}
