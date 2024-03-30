import { getList } from "@/apis";

import styles from "./styles/home.module.css";
import Lists from "@/components/Lists";

export default async function Home() {
  const { results } = await getList();

  return (
    <section className={styles.section}>
      <Lists results={results} />
    </section>
  );
}
