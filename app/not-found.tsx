import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex  flex-col items-center justify-between w-full align-middle px-24   pt-24 h-screen">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </main>
  );
}
