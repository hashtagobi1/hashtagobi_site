import Divider from "@/components/Divider";
import { ReportView } from "@/components/ReportView";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { Redis } from "@upstash/redis";

export default async function Blog() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="text-center font-bold my-10">A blog by obi</h2>
      <div className="  ">
        <div className="flex gap-6 p-3">
          <div>
            <Image
              src="/blog/left.jpg"
              alt="blog image"
              width={500}
              height={600}
            />
          </div>
          <div>
            <Image
              src="/blog/middle.jpg"
              alt="blog image"
              width={500}
              height={600}
            />
          </div>
          <div>
            <Image
              src="/blog/right.jpg"
              alt="blog image"
              width={500}
              height={600}
            />
          </div>
        </div>
        <p className="text-center  text-sm underline my-5">
          photos by{" "}
          <Link
            className="font-bold "
            href={
              "https://www.instagram.com/koice.media?igsh=MWNxeHFxaDF0MWd5aQ=="
            }
          >
            @koice.media
            {/* <span>
              <SocialIcon
                style={{ width: "40px", height: "40px" }}
                fgColor="#000"
                bgColor="#fff"
                aria-label={`icon link for insta`}
                className="border rounded-full border-black"
                url={"https://instagram.com/dreslenses?igshid=MzRlODBiNWFlZA=="}
              />
            </span> */}
          </Link>
        </p>
        <Divider />
        <div className="flex flex-col gap-5 text-center">
          <h2 className="font-bold text-3xl flex-col text-center mb-8">
            posts:
          </h2>

          <Link className=" " href="/blog/birthday">
            <p className="cursor-pointer underline text-md md:text-lg text-blue-600">
              4th Birthday
            </p>
          </Link>
          <Link className=" " href="/blog/002">
            <p className="cursor-pointer underline text-md md:text-lg text-blue-600">
              Money Dey at Sony Music HQ?...
            </p>
          </Link>
          <Link className=" " href="/blog/001">
            <p className="cursor-pointer underline text-md md:text-lg text-blue-600">
              playing guitar & rapping about FUPA in Peckham
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
