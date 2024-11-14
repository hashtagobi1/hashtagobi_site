"use client";

import Link from "next/link";
import React, { ReactElement, SVGProps } from "react";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  BuildingStorefrontIcon,
  NewspaperIcon,
  MusicalNoteIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

type Props = {};

const Nav = (props: Props) => {
  const currentRoute = usePathname();

  const navLink = (linkName: string, link: string, icon: any) => {
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
    <nav className="mb-3 ">
      <ul className="flex p-10 text-gray-400  justify-center gap-10 items-center ">
        {navLink("home", "/", <HomeIcon width={30} />)}
        {navLink("music", "/music", <MusicalNoteIcon width={30} />)}
        {navLink("blog", "/blog", <NewspaperIcon width={30} />)}
        {navLink(
          "store",
          "https://mangotfiredinnit.com",
          <BuildingStorefrontIcon width={30} />
        )}
        {/* {navLink("guestbook", "/guestbook", <PencilIcon width={30} />)} */}
        {/* <Link className="navLink" href={"/guestbook"}>
          <li>guestbook</li>
        </Link> */}
      </ul>
    </nav>
  );
};

export default Nav;
