import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Basics Class",
  description:
    "The Basics Class or TBC is an initiative by Sachin Sharma to personally teach students in the field of Software Engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
