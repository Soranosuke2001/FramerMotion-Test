import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-slate-300 h-14">
      <ul className="flex justify-around text-2xl h-full items-center">
        <li>
          <Link href="/" >Home</Link>
        </li>
        <li>
          <Link href="/drag">Drag</Link>
        </li>
      </ul>
    </nav>
  );
}
