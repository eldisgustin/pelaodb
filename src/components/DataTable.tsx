import { use } from "react";
import { BooksContext } from "../contexts/books";
const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

export function DataTable() {
  const books = use(BooksContext);

  return (
    <div className="overflow-x-auto">
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
          {books.map((book, index) => (
            <tr key={`${book.isbn}.${index}`}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.editorial}</td>
              <td>{book.isbn}</td>
              <td>{book.status}</td>
              <td>{formatter.format(book.price_card)}</td>
              <td>{formatter.format(book.price_cash)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
