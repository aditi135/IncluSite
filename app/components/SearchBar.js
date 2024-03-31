"use client";
// import styles from "../styles/SearchBar.css";
import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";

// import { filterData } from "../queries.js";
import React, { useState } from "react";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");
  const fetchData = async (query) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      dataSource: "WAVEFedWebsiteData",
      database: "AxeCoreData",
      collection: "AxeCoreFormatted",
      filter: { $or: [{url: {
        $regex: query,
        $options: "i"
      }},{url_dom: {
        $regex: query,
        $options: "i"
      }}
    ]
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://us-east-2.aws.data.mongodb-api.com/app/data-ergdg/endpoint/data/v1/action/find",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setResults(result);
      })
      .catch((error) => console.error(error));
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
    <FaSearch id="search-icon" />
    <input
      type="search"
      id="search"
      placeholder="Search"
      value={input}
      onChange={(e) => handleChange(e.target.value)}
    /></div>
  );
}
