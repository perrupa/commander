import React from "react";
// import "./Frame.css";

function handleKeyEvent(event) {
  console.table(event);
}

export function FileList({ children }) {
  return (
    <section onKeyUp={handleKeyEvent}>
      <input type="text" className="Search" />
      <ol className="FileList">
        <li>file 1.js</li>
        <li>file 2.js</li>
        <li>file 3.js</li>
      </ol>
    </section>
  );
}
