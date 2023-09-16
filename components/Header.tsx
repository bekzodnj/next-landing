import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import TruckSelect from "./TruckSelect";
import Link from "next/link";
import Nav from "./Nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
});

export default function Header() {
  return (
    <section className={inter.className + " "}>
      <header className="w-100 bg bg-[url('/images/truck_bg.jpg')] bg-cover bg-right-bottom pb-10 text-neutral-800 sm:bg-bottom lg:h-screen">
        <Nav />

        <div className="container mt-28 flex flex-col gap-x-14 lg:flex-row">
          <div id="hero-text" className="w-full text-white">
            <h2 className="mb-4 text-6xl font-extralight leading-[1.1] tracking-tight text-white">
              <span className="bg-cyan-800 bg-opacity-40 sm:bg-inherit">
                Now <br /> Its easy for you <br />
                to transport
              </span>
            </h2>
            <p className="font mb-4 w-60 text-lg text-gray-200 sm:w-[600px]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts. Bu yangi matn.
            </p>

            <div className="font-extralight">
              <span> &#9658; — Easy steps for renting a car</span>
            </div>
          </div>

          <TruckSelect />
        </div>
      </header>
    </section>
  );
}

// function Nav() {
//   return (
//     <nav className="border-gray-200 bg-white dark:bg-gray-900">
//       <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
//         <a href="https://flowbite.com/" className="flex items-center">
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="mr-3 h-8"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
//             Flowbite
//           </span>
//         </a>
//         <div className="flex items-center md:order-2">
//           <button
//             type="button"
//             data-dropdown-toggle="language-dropdown-menu"
//             className="inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
//           >
//             <svg
//               className="mr-2 h-5 w-5 rounded-full"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               viewBox="0 0 3900 3900"
//             >
//               <path fill="#b22234" d="M0 0h7410v3900H0z" />
//               <path
//                 d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
//                 stroke="#fff"
//                 stroke-width="300"
//               />
//               <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
//               <g fill="#fff">
//                 <g id="d">
//                   <g id="c">
//                     <g id="e">
//                       <g id="b">
//                         <path
//                           id="a"
//                           d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
//                         />
//                         <use xlinkHref="#a" y="420" />
//                         <use xlinkHref="#a" y="840" />
//                         <use xlinkHref="#a" y="1260" />
//                       </g>
//                       <use xlinkHref="#a" y="1680" />
//                     </g>
//                     <use xlinkHref="#b" x="247" y="210" />
//                   </g>
//                   <use xlinkHref="#c" x="494" />
//                 </g>
//                 <use xlinkHref="#d" x="988" />
//                 <use xlinkHref="#c" x="1976" />
//                 <use xlinkHref="#e" x="2470" />
//               </g>
//             </svg>
//             English (US)
//           </button>

//           <button
//             data-collapse-toggle="navbar-language"
//             type="button"
//             className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
//             aria-controls="navbar-language"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="h-5 w-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
//           id="navbar-language"
//         >
//           <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
//             <li>
//               <a
//                 href="#"
//                 className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
