import React, { useState } from "react";
import { useSearch } from "../hooks/useSearch";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const PackageList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const search = useSearch();
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    search(searchTerm);
  };
  return (
    <div>
      <form onSubmit={submitSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading....</h3>}
      {!error &&
        !loading &&
        data.map((pack) => (
          <li>
            {pack.name} : {pack.version}
            <br />
          </li>
        ))}
    </div>
  );
};
