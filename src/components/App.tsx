import { useState } from "react";
import { Search } from "../components/Search";
import { BooksContext } from "../contexts/books";
import type { Book } from "../models/book.model";
import FuzzySearch from "fuzzy-search";
import { DataTable } from "./DataTable";

type AppProps = {
  books: Book[];
};

export function App({ books }: AppProps) {
  const [database, setDatabase] = useState<Book[]>(books);
  const searcher = new FuzzySearch(books, ["title", "author", "isbn"]);
  const onSearch = function onSearch(filter: string) {
    const result = searcher.search(filter);
    setDatabase(result);
  };

  return (
    <BooksContext value={database}>
      <Search onSearch={onSearch} />
      <DataTable />
    </BooksContext>
  );
}
