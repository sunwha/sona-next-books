import { getList } from "@/apis";
import Link from "next/link";

export default async function Home() {
  const { results } = await getList();
  return (
    <>
      <h1>The New York times best seller explorer</h1>
      <ul>
        {results.map((book) => (
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
