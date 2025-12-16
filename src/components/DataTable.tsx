import { use, useMemo } from "react";
import { useList } from "react-use";
import { BooksContext } from "../contexts/books";
import fuzzy from "fuzzy";
import type { Book } from "../models/book.model";
import { Summary } from "./Summary";

const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

type DataTableProps = {
  query: string;
};

export function DataTable({ query }: DataTableProps) {
  const books = use(BooksContext);
  const results = useMemo(() => {
    return fuzzy.filter(query, books, {
      pre: "<mark>",
      post: "</mark>",
      extract(el) {
        return el.title;
      },
    });
  }, [books]);

  return (
    <table className="table table-sm table-zebra table-pin-rows">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Editorial</th>
          <th>ISBN</th>
          <th>Estado</th>
          <th>Tarjeta</th>
          <th>Efectivo</th>
        </tr>
      </thead>
      <tbody>
        {results.map((book, index) => (
          <tr key={`${book.original.isbn}.${index}`}>
            <td dangerouslySetInnerHTML={{ __html: book.string }}></td>
            <td>{book.original.author}</td>
            <td>{book.original.editorial}</td>
            <td className="text-right">{book.original.isbn}</td>
            <td>{book.original.status}</td>
            <td className="text-right">
              {formatter.format(book.original.price_card)}
            </td>
            <td className="text-right">
              {formatter.format(book.original.price_cash)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
