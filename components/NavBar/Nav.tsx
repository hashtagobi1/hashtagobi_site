"use client";

import Link from "next/link";
import React, { ReactElement, SVGProps } from "react";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  BuildingStorefrontIcon,
  NewspaperIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/solid";

type Props = {};

const Nav = (props: Props) => {
  const currentRoute = usePathname();

  const navLink = (
    linkName: string,
    link: string,
    icon: any
  ) => {
    return (
      <li>
        <Link
          className={`navLink  ${
            currentRoute.includes(`${linkName}`) ? "font-bold text-black" : ""
          }`}
          href={link}
        >
          <div className="flex flex-col items-center justify-center">
            {icon}
            {linkName}
          </div>
        </Link>
      </li>
    );
  };
  return (
    <nav className="">
      <ul className="flex p-10 text-gray-400  justify-center gap-6 items-center ">
        {navLink("home", "/", <HomeIcon width={20} />)}
        {navLink("music", "/music", <MusicalNoteIcon width={20} />)}
        {navLink("blog", "/blog", <NewspaperIcon width={20} />)}
        {navLink(
          "store",
          "https://mub-stuff.myshopify.com",
          <BuildingStorefrontIcon width={20} />
        )}
        {/* <Link className="navLink" href={"/guestbook"}>
          <li>guestbook</li>
        </Link> */}
      </ul>
    </nav>
  );
};

export default Nav;
