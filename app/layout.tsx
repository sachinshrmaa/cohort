import NavBar from "../components/NavBar";
import "./globals.css";

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
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}