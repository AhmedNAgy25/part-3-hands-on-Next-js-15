import React from "react";
//to disable dynamic params as id:"4" ==> not-fouhd 404
export const dynamicParams = false; //if rm this line id:"4" ==> will work normally
//enable us to use SSG to prerender static html
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <h1>
      Product {id} details renderd at {new Date().toLocaleTimeString()}
    </h1>
  );
}
