"use client";
import React, { useState } from "react";

function DashBoard() {
  const [name, setName] = useState("");
  console.log("dashboard");//will appear only in browser
  return (
    <>
      <h1>DashBoard</h1>
      <input
        className="outline-1 outline-blue-700"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>hello {name} !</p>
    </>
  );
}

export default DashBoard;
