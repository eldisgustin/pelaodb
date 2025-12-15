import { useState } from "react";

type SearchProps = {
  onSearch(filter: string): void;
};

export function Search({ onSearch }: SearchProps) {
  const [filter, setFilter] = useState<string>("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(filter);

    setFilter(event.currentTarget.value);
  };

  return (
    <form
      onSubmit={() => {
        onSearch(filter);
      }}
      className="join m-4"
    >
      <input onChange={handleChange} className="input grow join-item" />
      <button type="submit" className="btn btn-square join-item">
        🔎
      </button>
    </form>
  );
}
