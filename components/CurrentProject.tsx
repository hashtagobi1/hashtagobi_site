import Image from "next/image";
import Link from "next/link";
import React from "react";

const CurrentProject = () => {
  return (
    <Link href={"https://unitedmasters.com/m/man-got-fired-innit"}>
      <Image
        src="/epCover.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </Link>
  );
};

export default CurrentProject;
