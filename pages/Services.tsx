import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import ServicesOnly from "@/components/ServicesOnly";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Delog.uz </title>
      </Head>
      <div className={inter.className}>
        <ServicesOnly />
        <Footer />
      </div>
    </>
  );
}