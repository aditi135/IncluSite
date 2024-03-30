import React from "react";
import { filterData } from "../queries.js";

export default function SearchResults(results) {
    var pageItems = JSON.parse(results["results"])["documents"];
    
    let arr = [];
    for (let key in pageItems) {
        arr.push(pageItems[key]);
    }
    arr = filterData(arr);
    
    pageItems = JSON.parse(JSON.stringify(arr));
    return (
        <>
    { pageItems.map(function(data) {
      return (
        <div key={data.url}>
          {data.url}
        </div>
      )
    }) }
    </>
    )
}
