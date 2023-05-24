import Link from "next/link";

const linksList = [
    {
        title: 'Home',
        page: '/'
    },
    {
        title: 'Drag',
        page: '/drag'
    },
]

export default function NavBar() {
  return (
    <nav className="bg-slate-300 h-14">
      <ul className="flex justify-around text-2xl h-full items-center">
        {linksList.map((link, index) => (
            <li key={index}>
                <Link href={`${link.page}`}>{link.title}</Link>
            </li>
        ))}
      </ul>
    </nav>
  );
}
