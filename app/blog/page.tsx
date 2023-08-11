import Divider from "@/components/Divider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Blog() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="text-center font-bold my-10">A blog by obi</h2>
      <div className="  ">
        <div className="flex gap-6 p-3">
          <div>
            <Image
              src="/blog/left.JPG"
              alt="blog image"
              width={500}
              height={600}
            />
          </div>
          <div>
            <Image
              src="/testimonials/main.JPG"
              alt="blog image"
              width={500}
              height={600}
            />
          </div>
          <div>
            <Image
              src="/blog/right.JPG"
              alt="blog image"
              width={500}
              height={600}
            />
          </div>
        </div>
        <p className="text-center my-5">
          photos by{" "}
          <Link
            className="font-bold"
            href={"https://instagram.com/dreslenses?igshid=MzRlODBiNWFlZA=="}
          >
            @dreslenses
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
        <div className="flex flex-col text-center">
          <h2 className="font-bold text-3xl text-center mb-8">posts:</h2>

          <Link
            className="cursor-pointer underline text-blue-600"
            href="/blog/001"
          >
            <p>playing guitar & rapping about FUPA in Peckham</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
