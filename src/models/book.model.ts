import { Expose } from "class-transformer";

export class Book {
  declare title: string;
  declare author: string;
  declare editorial: string;
  declare isbn: number;
  declare status: string;
  declare price_card: number;
  declare price_cash: number;

  @Expose({ toClassOnly: true })
  get normalizedTitle() {
    return this.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  @Expose()
  get normalizedAuthor() {
    return this.author.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}
