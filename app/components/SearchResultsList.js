import "../styles/SearchResultsList.css";
import React from "react";
import { filterData, getScore } from "../queries.js";

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
          <a href={data.url_dom}>{data.url}</a>
          <br/>
          <b>WCAG Test Results</b>
          Passes: {data.pass_count} &nbsp; Incomplete passes: {data.incomplete_count} &nbsp; Violations: {data.violation_count} <br/>
          Overall Accessibility Score: {getScore(data)} <br/>
          <b>Subscores: </b>
          Visual<br/>
          Screen-Reader Optimized: {getScore(data, screen_reader)}<br/>
          Text Contrast: {getScore(data, text_contrast)}<br/>
          Audio<br/>
          Closed Captioning: {getScore(data, closed_captioning)}<br/>
          No/Few Audio Clips: {getScore(data, no_audio)}<br/>
        </div>;
      })}
    </>
  );
}
