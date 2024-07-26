import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Trip | Car Rental Services",
  description: "Premium car rental services for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
