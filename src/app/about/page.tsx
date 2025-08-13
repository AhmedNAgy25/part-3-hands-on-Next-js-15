//! by default any component is server component untill you change it , so we cant use any client component feature untill change component type
//export const dynamic="force-dynamic" //?it will force to by dynamic render however it didn't need to be
import { cookies } from "next/headers";
import React from "react";

//dynamic render: page is generate per request ,
//  enable while use dynamic fn like cookies headers connection props drafmod after searchParams
//  used for personalize content
//  next js by default select the best mode dynamic or static depend on your code


async function About() {
  console.log("this is server component"); //appear on server and can appear in browser

  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  return <h1>about page {new Date().toLocaleTimeString()}</h1>;
}

export default About;
