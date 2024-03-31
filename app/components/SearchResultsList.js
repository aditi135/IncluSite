import "../styles/SearchResultsList.css";
import React from "react";
import { filterData } from "../queries.js";

export default function SearchResultsList(results) {
  var pageItems = JSON.parse(results["results"])["documents"];

  let arr = [];
  for (let key in pageItems) {
    arr.push(pageItems[key]);
  }
  arr = filterData(arr);
  if (arr.length == 0) {
    return (<div>No results found; try another search!</div>)
  }

  pageItems = JSON.parse(JSON.stringify(arr));
  return (
    <>
      {pageItems.map(function (data) {
        return <div key={data.url} className="results-list">{data.url}</div>;
      })}
    </>
  );
}
