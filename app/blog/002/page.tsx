import BlogHeading from "@/components/Blog/BlogHeading";
import React from "react";
import { ParamProps } from "../001/page";
import Link from "next/link";
import EmailForm from "@/components/Email/EmailForm";

const SonyMoneyDey = ({ params }: ParamProps) => {
  return (
    <div className="flex flex-col justify-center text-center items-center p-4">
      <div className="max-w-2xl gap-6 border border-black p-4 rounded-lg">
        <BlogHeading
          title="Money Dey at Sony Music HQ?..."
          date={new Date("Saturday August 20, 2023 09:00:00")}
          params={params}
        />

        <div className="mt-10 text-sm md:text-lg">
          <div className=" flex-col justify-center w-full text-center ">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YGcN8tT6X9g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-8">just a few cheeky paragraphs today.</p>
          <p className="mt-8">
            haven&apos;t really posted about it too tough but a few months ago i
            had the most wonderful opportunity to perform at{" "}
            <span className="text-xl font-bold italic">
              SONY FUCKING MUSIC HQ.{" "}
            </span>
            yes. the label with a roster of Beyonce + Michael Jackson + Childish
            Gambino{" "}
            <span className="font-light text-xs opacity-75">
              (hi guys im coming to join, wait me.)
            </span>
          </p>
          <p className="mt-8">
            the opportunity gracefully came thru da hard working team over at{" "}
            <Link
              className="text-blue-500 underline font-bold"
              href={"https://www.creativementornetwork.org"}
              passHref
            >
              Creative Mentor Network
            </Link>{" "}
            who are an organisation working with young people/creative
            professionals to make the creative industries more
            socio-economically diverse.
          </p>
          `
          <p className="mt-8">
            I&apos;ve got loads of footage from the day but thought I&apos;d
            start drip feeding you content. This Youtube Video is a performance
            of one of my{" "}
            <span className="text-gray-400 font-bold">
              multi-platinum hit...
            </span>
            <br />
            <span className="font-bold uppercase my-4 text-orange-600 text-3xl">
              &quot;Money Dey!&quot;
            </span>
          </p>
          <div className="my-4 border border-black rounded-md  p-4">
            <video
              title="me chilling with chart topper Bianca Baz before we performed"
              controls
              src={"/blog/sony_money/bianca_obi_end.MP4"}
            />
            <p className="text-gray-500 my-2">
              me chilling with chart topper{" "}
              <Link
                className="underline text-blue-500"
                passHref
                href={"http://www.instagram.com/biancabaz12"}
              >
                Bianca Baz
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <EmailForm />
    </div>
  );
};

export default SonyMoneyDey;
