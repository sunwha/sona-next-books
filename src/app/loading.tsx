import styles from "./styles/loading.module.css";

export default function Loading() {
  return (
    <section className={styles.section}>
      <h1 className={styles.loading}>Loading...</h1>
    </section>
  );
}
