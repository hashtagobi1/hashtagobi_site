import Footer from "@/components/Footer";
import "./globals.css";
import { Courier_Prime } from "next/font/google";

const CourierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Mailing List",
  description: "obi's mailing list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={CourierPrime.className}>{children}</body>
      <Footer/>
    </html>
  );
}
