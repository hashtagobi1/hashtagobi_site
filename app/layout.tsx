import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Nav from "@/components/NavBar/Nav";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Provider from "./Providers/client-provider";

const InterImport = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Most Entertaining Rapper",
  description: "Home Page",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={InterImport.className}>
        <Toaster />
        <Nav />
        <Provider session={session}>{children}</Provider>
        <div className="relative flex py-5 items-center">
          <div className="justify-center items-center flex-grow border-t border-black"></div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
