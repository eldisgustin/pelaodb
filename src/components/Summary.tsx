import { useMemo } from "react";
import type { Book } from "../models/book.model";

type SummaryProps = {
  books: Book[];
};

export function Summary({ books = [] }: SummaryProps) {
  const cardTotal = useMemo(
    () => books.reduce((prev, current) => current.price_card + prev, 0),
    [books]
  );
  const cashTotal = useMemo(
    () => books.reduce((prev, current) => current.price_cash + prev, 0),
    [books]
  );
  return (
    <section className="flex justify-around bg-base-300">
      <section>
        <section className="grid grid-cols-2 grid-rows-2 gap-x-4">
          <section>Efectivo</section>
          <section>{cashTotal}</section>

          <section>Tarjeta</section>
          <section>{cardTotal}</section>
        </section>
      </section>
    </section>
  );
}
