import CTAs from "@/components/CTAs";
import EmailSection from "@/components/Email/EmailSection";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <EmailSection />
      <CTAs />
      <Testimonials
        text={[
          "'Most Entertaining Rapper'",
          "'wow! see you at Glastonbury mate!'",
          "'he has such a way with his tongue... i mean his words'",
        ]}
      />
      Sign our wall
    </main>
  );
}
