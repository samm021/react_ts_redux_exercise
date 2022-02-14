import React, { useState } from "react";
// import { useDispatch } from "react-redux";

export const PackageList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // useDispatch;
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
    </div>
  );
};
