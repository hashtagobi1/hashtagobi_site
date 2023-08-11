"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {};

const Nav = (props: Props) => {
  const currentRoute = usePathname();
  return (
    <nav className="">
      <ul className="flex p-10 text-gray-400  justify-center gap-6 items-center ">
        <Link
          className={`navLink ${
            currentRoute === "/" ? "font-bold text-black" : ""
          }`}
          href={"/"}
        >
          <li>home</li>
        </Link>
        <Link
          className={`navLink ${
            currentRoute === "/music" ? "font-bold text-black" : ""
          }`}
          href={"/music"}
        >
          <li>music</li>
        </Link>
        <Link
          className={`navLink ${
            currentRoute.includes("blog") ? "font-bold text-black" : ""
          }`}
          href={"/blog"}
        >
          <li>blog</li>
        </Link>
        {/* <Link className="navLink" href={"/guestbook"}>
          <li>guestbook</li>
        </Link> */}
      </ul>
    </nav>
  );
};

export default Nav;
