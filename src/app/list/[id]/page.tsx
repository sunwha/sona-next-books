import { getBookList } from "@/apis";
import Link from "next/link";
import styles from "../../styles/list.module.css";

interface IParam {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParam) {
  const { results } = await getBookList(id);
  return {
    title: `${results.list_name} | Sona next books`,
  };
}

export default async function Detail({ params: { id } }: IParam) {
  const { results } = await getBookList(id);
  return (
    <section className={styles.section}>
      <h2 className={styles.sub_title}>{results.list_name}</h2>
      <ul className={styles.list}>
        {results.books.map((book) => (
          <li key={book.title}>
            <i>{book.rank}</i>
            <img src={book.book_image} alt={book.title} />
            <strong>{book.title}</strong>
            <span>by {book.author}</span>
            <p>{book.description}</p>
            <Link href={book.amazon_product_url} target="_blank">
              Buy now
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
