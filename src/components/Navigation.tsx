import Link from "next/link";
import styles from "../app/styles/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <h1>The New York times best seller explorer</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
