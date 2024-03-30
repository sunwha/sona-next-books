"use client";
import styles from "../app/styles/home.module.css";

export default function Lists({
  handleClick,
}: {
  handleClick: (e: { currentTarget: HTMLButtonElement }) => void;
}) {
  return (
    <ul className={styles.list_cate}>
      <li>
        <button onClick={handleClick}>ALL</button>
      </li>
      <li>
        <button onClick={handleClick}>WEEKLY</button>
      </li>
      <li>
        <button onClick={handleClick}>MONTHLY</button>
      </li>
    </ul>
  );
}
