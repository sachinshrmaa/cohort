import { Poppins, Albert_Sans } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const albert_sans = Albert_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-albert",
});
