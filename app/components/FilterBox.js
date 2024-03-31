"use client";
import styles from "../styles/SearchBar.css";
// import { filterData } from "../queries.js";
// import React, { useState } from "react";

export default function FilterBox({text}) {
  return (
    <div>
        <input type="checkbox" value={text}></input>
        <label>{text}</label>
    </div>
    
  )
}
