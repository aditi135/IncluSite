import "../styles/SearchResultsList.css";
import React from "react";
import { filterData, getScore } from "../queries.js";
import Tag from "./Tag.js";
import TagContainer from "./TagContainer.js"


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
        let screen_reader = ["aria-allowed-attr", "aria-braille-equivalent", "aria-command-name", "aria-conditional-attr", "aria-deprecated-role", "aria-hidden-body", "aria-hidden-focus", "aria-input-field-name", "aria-progressbar-name", "aria-prohibited-attr", "aria-required-attr", "aria-required-children", "aria-required-parent", "aria-roles", "aria-toggle-field-name", "aria-tooltip-name", "aria-valid-attr-value", "aria-valid-attr", "heading-order"];
        let text_contrast = ["color_contrast", "color-contrast-enhanced"]
        let closed_captioning = ["audio-caption"]
        let no_audio = ["no-autoplay-audio"]
        return <div key={data.url} className="results-list">
          {/* <h3>WCAG Test Results</h3> */}
          {/* Passes: {data.pass_count} &nbsp; Incomplete passes: {data.incomplete_count} &nbsp; Violations: {data.violation_count} <br/> */}
          Overall Accessibility Score: <h3 class="large">{getScore(data)}</h3> <br/>

          <a href={data.url_dom} target="blank">{data.url}</a> <br/>
          <TagContainer
            screenReader={getScore(data, screen_reader)}
            textContrast={getScore(data, text_contrast)}
            closedCaptions={getScore(data, closed_captioning)}
            noAudio={getScore(data, no_audio)}
          />

        </div>;
      })}
    </>
  );
}
