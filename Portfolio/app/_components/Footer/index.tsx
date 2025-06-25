import Link from "next/link";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <Link
          href="https://www.facebook.com/nishant.chettri.718/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"
          target="_blank"
          aria-label="Facebook"
        >
          <FaFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/xhettrinishant/"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram />
        </Link>
        <Link href="w24010@osfl.ac.jp" aria-label="Email">
          <FaEnvelope />
        </Link>
      </div>
      <p className={styles.cr}>© SIMPLE. All Rights Reserved 2025</p>
    </footer>
  );
}
