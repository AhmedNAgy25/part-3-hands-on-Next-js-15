import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>hello Home page</h1>
      <div className="flex gap-3">
        <Link href="/about">about</Link>
        <Link href="/dashboard">dashboard</Link>
        <Link href="/products">products</Link>
      </div>
    </>
  );
}
