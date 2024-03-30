import React from "react";

export default function SearchResults(results) {
    var pageItems = results["results"];
    return (
        <>
    { pageItems.map(function(data) {
      return (
        <div>
          {data}
        </div>
      )
    }) }
    </>
    )
}
