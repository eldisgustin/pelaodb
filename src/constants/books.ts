import { plainToInstance } from "class-transformer";
import * as path from "node:path";
import readXlsxFile from "read-excel-file/node";
import { Book } from "../models/book.model";

const source = path.resolve(import.meta.dirname, "../static/DB.xlsx");
const rows = await readXlsxFile(source);
const raw = rows
  .slice(1)
  .map(([title, author, editorial, isbn, status, price_card, price_cash]) => {
    return {
      title,
      author,
      editorial,
      isbn,
      status,
      price_card,
      price_cash,
    };
  });
export const books = plainToInstance(Book, raw);
