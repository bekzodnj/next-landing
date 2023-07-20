import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import TruckSelect from "./TruckSelect";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <section className={inter.className + ""}>
      <header className="w-100 h-screen bg-opacity-50 bg-[url('/images/bg_jeep.jpg')] bg-cover py-10 text-neutral-800">
        <nav className="w-100 container mx-auto flex justify-between">
          <Link href="#">
            <Image
              src="/images/logo_new.png"
              width={150}
              height={150}
              alt="logo"
            />
          </Link>

          <Navbar />
        </nav>

        <div className="container mt-40 flex flex-col gap-x-14 sm:flex-row">
          <div id="hero-text" className="w-full text-white">
            <h2 className="mb-4 text-5xl font-extralight leading-[1.1] tracking-tight text-white">
              Now <br /> Its easy for you <br />
              to rent a car
            </h2>
            <p className="mb-4 text-lg font-normal">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts
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
