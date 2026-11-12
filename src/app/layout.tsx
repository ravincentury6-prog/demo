import type { Metadata } from "next";
import { moulin,neptune } from "./fonts";
import "./globals.css";
import Navbar from "@/components/Nav";
import Quote from "@/components/Quote"
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Welcome to ChigDil",
  description:"",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${moulin.variable} ${neptune.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-neptune">
        <Navbar />
        {children}
        <Quote />
        <Footer />
        </body>
    </html>
  );
}
