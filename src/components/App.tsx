import { useMemo, useRef, useState } from "react";
import { Search } from "../components/Search";
import { BooksContext } from "../contexts/books";
import { Book } from "../models/book.model";
import FuzzySearch from "fuzzy-search";
import { DataTable } from "./DataTable";
import { plainToInstance } from "class-transformer";
import { Summary } from "./Summary";

type AppProps = {
  books: Book[];
};

export function App({ books }: AppProps) {
  const source = useMemo(() => plainToInstance(Book, books), [books]);
  const searcher = new FuzzySearch(source, [
    "normalizedTitle",
    "normalizedAuthor",
    "isbn",
  ]);
  const [database, setDatabase] = useState<Book[]>(source);
  const [filter, setFilter] = useState("");
  const onSearch = function onSearch(filter: string) {
    const result = searcher.search(filter);
    setDatabase(result);
    setFilter(filter);
  };

  return (
    <BooksContext value={database}>
      <main className="min-h-screen max-h-screen min-w-screen grid grid-rows-[auto_1fr_auto]">
        <Search onSearch={onSearch} />
        <section className="overflow-auto">
          <DataTable query={filter} />
        </section>
        {/* <Summary books={[]} /> */}
      </main>
    </BooksContext>
  );
}
