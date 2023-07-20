import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Delog.uz </title>
      </Head>
      <div className={inter.className}>
        <Header />
        <ServicesSection />
        <PartnersSection />
      </div>
    </>
  );
}
