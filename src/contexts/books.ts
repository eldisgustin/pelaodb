import { createContext } from "react";
import { Book } from "../models/book.model";

export const BooksContext = createContext<Book[]>([]);
