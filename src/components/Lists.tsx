"use client";
import Link from "next/link";
import styles from "../app/styles/home.module.css";
import { ILists } from "@/types";
import { useState } from "react";

export default function Lists({ results }: { results: ILists[] }) {
  const [sortList, setSortList] = useState("");
  const handleSortLists = (e: { currentTarget: HTMLButtonElement }) => {
    const selected = e.currentTarget.innerText;
    setSortList(selected);
  };
  const filteredResults =
    sortList !== "ALL"
      ? results.filter((book) => book.updated.includes(sortList))
      : results;
  return (
    <>
      <ul className={styles.list_cate}>
        <li>
          <button onClick={handleSortLists}>ALL</button>
        </li>
        <li>
          <button onClick={handleSortLists}>WEEKLY</button>
        </li>
        <li>
          <button onClick={handleSortLists}>MONTHLY</button>
        </li>
      </ul>

      <ul className={styles.list_lists}>
        {filteredResults.map((book) => (
          <li key={book.list_name_encoded}>
            <Link href={`/list/${book.list_name_encoded}`}>
              {book.list_name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
