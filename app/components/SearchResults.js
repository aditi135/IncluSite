import React from "react";

export default function SearchResults(results) {
    console.log(results);
    var pageItems = JSON.parse(results["results"])["documents"];
    console.log(pageItems);
    return (
        <>
    { pageItems.map(function(data) {
        console.log(data);
      return (
        <div key={data.url}>
          {data.url}
        </div>
      )
    }) }
    </>
    )
}
