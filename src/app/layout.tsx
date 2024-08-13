import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BusmeNavbar from "./components/BusmeNavbar";
import BusmeFooter from "./components/BusmeFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BusMe",
  description: "BusMe next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BusmeNavbar />
        {children}
        <BusmeFooter />
      </body>
    </html>
  );
}
