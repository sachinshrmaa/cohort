import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import { poppins, albert_sans } from "@/app/font";

export const metadata = {
  title: "The Basics Class by Sachin",
  description: "the basics class by sachin sharma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${albert_sans.variable} font-poppins font-albert`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
