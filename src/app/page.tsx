import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>HOME PAGE</h1>
      <Link className="p-2 m-4 bg-amber-950 text-amber-50" href="/dashboard">
        Dashboard
      </Link>
    </>
  );
}
