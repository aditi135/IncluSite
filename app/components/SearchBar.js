"use client";
import styles from "../styles/SearchBar.css";
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
      filter: {
        url: {
          $regex: query,
        },
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
    <input
      type="search"
      id="search"
      placeholder="Search"
      value={input}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
