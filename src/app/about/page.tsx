//! by default any component is server component untill you change it , so we cant use any client component feature untill change component type
import React from "react";

function About() {
  console.log("this is server component"); //appear on server and can appear in browser
  return <h1>about page</h1>;
}

export default About;
