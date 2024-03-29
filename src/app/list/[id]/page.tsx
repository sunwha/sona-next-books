import { getBookList } from "@/apis";
import Link from "next/link";

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
    <>
      <h2>{results.list_name}</h2>
      <ul>
        {results.books.map((book) => (
          <li key={book.title}>
            {book.title}
            <Link href={book.amazon_product_url} target="_blank">
              Buy now
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
