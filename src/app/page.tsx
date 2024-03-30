"use server";
import { getList } from "@/apis";
import Link from "next/link";
import styles from "./styles/home.module.css";
import Lists from "@/components/Lists";

export default async function Home() {
  const { results } = await getList();
  const handleSortLists = async (e: { currentTarget: HTMLButtonElement }) => {
    "use server";
    await console.log(e.currentTarget.value);
  };
  return (
    <section className={styles.section}>
      <Lists handleClick={handleSortLists} />
      <ul className={styles.list_lists}>
        {results.map((book) => (
          <li key={book.list_name_encoded}>
            <Link href={`/list/${book.list_name_encoded}`}>
              {book.list_name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
