import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import ServicesOnly from "@/components/ServicesOnly";
import Nav from "@/components/Nav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeaderOnly from "@/components/HeaderOnly";

const inter = Inter({ subsets: ["latin"] });

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Delog.uz </title>
      </Head>
      <div className={inter.className}>
        <HeaderOnly />
        <ServicesOnly />
        <Footer />
      </div>
    </>
  );
}