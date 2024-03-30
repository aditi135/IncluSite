"use client";
import styles from "../styles/SearchBar.css";
import React, { useState } from "react";

export default function SearchBar({setResults}) {
  const [input, setInput] = useState("");
  const fetchData = (query) => {
    // call api here
    setResults([1, 2, 3]);
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <input
      type="search"
      id="search"
      placeholder="Search"
      value={input}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
