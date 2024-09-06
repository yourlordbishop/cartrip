import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { SessionProvider } from "next-auth/react";
import { ContextProvider } from "@/lib/context";

const montserrat_thin_300 = Montserrat({ 
  subsets: ["latin"],
  weight: "300"
});

export const metadata = {
  title: "Car Trip | Car Rental Service",
  description: "Premium car rental services for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat_thin_300.className}>
        <ContextProvider>
          <SessionProvider>
            <Nav/>
            {children}
            <Footer/>
          </SessionProvider>
        </ContextProvider>
      </body>
    </html>
  );
}