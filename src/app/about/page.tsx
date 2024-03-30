import { Metadata } from "next/types";
import styles from "../styles/about.module.css";

export const metadata: Metadata = {
  title: "About | Sona next books",
};

export default function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sub_title}>About Us</h2>
      <div className={styles.cont_box}>
        <p>
          Welcome to the official explorer for The New York Times Best Seller
          list explorer.
        </p>
        <p>We hope you enjoy your stay!</p>
      </div>
    </section>
  );
}
