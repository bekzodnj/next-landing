import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Nav from "./Nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
});

export default function HeaderOnly() {
  return (
    <section className={inter.className + " "}>
      <header className="w-100 bg bg-[url('/images/truck_bg.jpg')] bg-cover bg-right-bottom pb-10 text-neutral-800 sm:bg-bottom lg:h-screen">
        <Nav />

        
      </header>
    </section>
  );
}

