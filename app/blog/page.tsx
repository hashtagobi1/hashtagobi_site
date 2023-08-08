import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <div className="flex flex-col justify-center items-center max-w-lg">
      <h2 className="text-center font-bold">A blog by obi</h2>
      <div>
        <Image
          src="/testimonials/main.JPG"
          alt="blog image"
          width={800}
          height={1000}
        />
        <Link className="cursor-pointer" href="/blog/001">
          <p>New Gig</p>
        </Link>
      </div>
    </div>
  );
}
