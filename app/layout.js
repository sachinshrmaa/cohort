import "./globals.css";

export const metadata = {
  title: "The Basics Class",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
