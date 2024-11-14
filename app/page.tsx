import CTAs from "@/components/CTAs";
import CurrentProject from "@/components/CurrentProject";
import EmailSection from "@/components/Email/EmailSection";
import Hero from "@/components/Hero/Hero";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      {/* <Hero /> */}
      <CurrentProject />
      {/* <EmailSection /> */}
    </main>
  );
}
