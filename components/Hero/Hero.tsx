"use client";

import React, { useState } from "react";
import HeroGallery, { TestimonialImages } from "./HeroGallery";
import TestimonialGallery from "./TestimonialGallery";
import Divider from "../Divider";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="max-w-sm md:max-w-2xl ">
      <div className="flex justify-between items-center">
        <Image src="/obi-logo.png" alt="logo" width="100" height="100" />
        <Image src="/mub-logo.png" alt="logo" width="100" height="100" />
      </div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-black"></div>
      </div>
      <div className="text-sm md:text-lg">
        <p className=" ">
          Hi. honestly i just needed a space to hold all my shit. gig dates, new
          music, photos from shows, life updates in the form of a blog.
          you&apos;ll find it all here. and for those of you who{" "}
          <span className="font-bold">don&apos;t</span> who i am...
        </p>
        <p className="mt-10">
          some call me the{" "}
          <span className="font-bold italic">
            most entertaining rapper in the uk
          </span>{" "}
          . but you can call me:
        </p>
        <p className="mt-3 text-center text-md font-bold">obi</p>
        <p className="mt-3">
          a musician who makes pop-rap based in East London. i could tell you
          that I&apos;ve been on radio (BBC + Capital Xtra) & performed all over
          London, (Sony Music HQ, Shoreditch,BoxPark, etc.) -- but imma let my
          fans speak.
        </p>
        <div className="flex justify-center mt-5">
          <Link
            href={"https://untd.io/r/ACTgLsmc8mKC/"}
            target="_blank"
            className="cursor-pointer"
            passHref
          >
            <button className="bg-white  rounded-lg p-3 font-semibold mr-2 border-black border text-black">
              latest single 🎵
            </button>
          </Link>
        </div>
        <Divider />
        <div className="p-10">
          <h2 className="font-bold  text-center text-2xl"> fan comments:</h2>
          <TestimonialGallery />
        </div>
        <h2 className="font-bold text-2xl text-center">
          you get the point innit.
        </h2>
        <Divider />
        <p className="mt-10">
          listen to some{" "}
          <Link
            className="underline text-blue-600 font-semibold"
            href={"/music"}
          >
            music
          </Link>
          . then subscribe to hear updates on the life of a creative
          entrepreneur who&apos;s turning 1p into a £1,000,000 through music.
        </p>
      </div>
    </div>
  );
};

export default Hero;
