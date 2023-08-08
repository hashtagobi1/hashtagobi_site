import Footer from "@/components/Footer";
import "./globals.css";
import { Courier_Prime } from "next/font/google";
import { Toaster } from "react-hot-toast";

const CourierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Most Entertaining Rapper",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={CourierPrime.className}>
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
