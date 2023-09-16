import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex list-none flex-col space-y-2 text-lg font-light font-medium text-gray-500 text-white dark:text-gray-400 sm:flex-row sm:space-x-6 sm:space-y-0">
      <li>
        <Link href="#">Main</Link>
      </li>
      <li>
        <Link href="#">Services</Link>
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
