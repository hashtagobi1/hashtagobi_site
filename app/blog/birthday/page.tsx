import BlogHeading from "@/components/Blog/BlogHeading";
import React from "react";
import { ParamProps } from "../001/page";
import Link from "next/link";
import EmailForm from "@/components/Email/EmailForm";

const Birthday = ({ params }: ParamProps) => {
  return (
    <div className="flex flex-col justify-center text-center items-center p-4">
      <div className="max-w-2xl gap-6 border border-black p-4 rounded-lg">
        <BlogHeading
          title="new age, new thoughts"
          date={new Date("Thursday November 14, 2024 13:36:23")}
          params={params}
        />

        <div className="mt-10 text-sm md:text-lg">
          <p className="mt-8">
            wow 4 years old. Can’t believe it. I’m getting so big.
          </p>
          <p className="mt-8">
            what does it mean to exist? the one wish i have for my birthday is
            to become more of a “human be-ing” and not a “human “do-ing”.
          </p>
          <p className="mt-8">
            funny, as I write that, I realise how futile that attempt may be
            actually as it now sounds like a new goal lol.
          </p>
          <p className="mt-8">
            as I continue to walk the path of a creative, im starting to fall in
            love with the idea of “rest” and “non-doing”. The Chinese call this
            “Wu-Wei”. For the first time in my life earlier this year I kinda
            felt… tired. Drained. For like. Months. this is not sexy bro, we
            must continue to be sexy ijn.
          </p>
          <p className="mt-8">
            How can Mr. Energy not have energy? Success is a tasty main course
            which comes with a bitter appetiser of struggle and pain.
          </p>
          <p className="mt-8">
            A million new* ideas rattling around in my head excited to see which
            one will grow legs first.
          </p>
          <p className="mt-8">
            Here’s to more be-ing and less do-ing. Happy birthday obi.
          </p>
        </div>
        <video
          src={"/blog/blogVid.MOV"}
          width="600"
          height="300"
          controls={true}
          className="mt-5"
          // autoplay={false}
        />
      </div>

      <EmailForm />
    </div>
  );
};

export default Birthday;
