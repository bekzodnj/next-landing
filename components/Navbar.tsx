import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex list-none flex-col space-y-2 text-lg font-light text-white sm:flex-row sm:space-x-6 sm:space-y-0">
      <li>
        <Link href="/about">Main</Link>
      </li>
      <li>
        <Link href="/about">Services</Link>
      </li>

      <li>
        <Link href="/about">Incoterms</Link>
      </li>
      <li>
        <Link href="/about">Useful articles</Link>
      </li>

      <li>
        <Link href="/about">Contacts</Link>
      </li>
      <li>
        <Link href="/about">Distance calculator</Link>
      </li>
    </div>
  );
}
