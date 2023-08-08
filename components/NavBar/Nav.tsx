import Link from "next/link";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className="">
      <ul className="flex p-10 text-gray-400  justify-center gap-6 items-center ">
        <Link className="navLink" href={"/"}>
          <li>home</li>
        </Link>
        <Link className="navLink" href={"/music"}>
          <li>music</li>
        </Link>
        {/* <Link className="navLink" href={"/blog"}>
          <li>blog</li>
        </Link> */}
        {/* <Link className="navLink" href={"/guestbook"}>
          <li>guestbook</li>
        </Link> */}
      </ul>
    </nav>
  );
};

export default Nav;
