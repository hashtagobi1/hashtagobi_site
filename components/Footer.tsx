import Link from "next/link";
import { platform } from "os";
import React, { ReactNode } from "react";
import { SocialIcon } from "react-social-icons";
import AppleMusic from "../public/customIcons/applemusic.svg";
import Image from "next/image";

type LinkType = {
  platform: string;
  url: string;
  svg?: any;
};

const Footer = () => {
  const links: LinkType[] = [
    // {
    //   platform: "Spotify",
    //   url: "https://open.spotify.com/album/0PXHig3xlW9A1ZXAVXqS5Z?si=WxAIPO1uRJ2PmiYZYd-3ew",
    // },
    // {
    //   platform: "Apple Music",
    //   url: "https://music.apple.com/us/artist/obi/1190987687",
    //   svg: AppleMusic,
    // },
    {
      platform: "TikTok",
      url: "http://tiktok.com/@hashtagobi",
    },
    {
      platform: "Instagram",
      url: "http://instagram.com/hashtagobi",
    },
  ];

  return (
    <footer className="flex flex-col justify-center items-center ">
      <ul className="flex gap-7 ">
        {links.map((link, i) => {
          console.log(link.svg);
          return (
            <Link key={i} target="_blank" passHref href={link.url}>
              <li className="">
                {link.svg ? (
                  <Image
                    src={link.svg}
                    width={`50`}
                    height={`50`}
                    className=" border   rounded-full border-black"
                    alt={`icon for ${link.platform}`}
                  />
                ) : (
                  <SocialIcon
                    style={{ width: "50px", height: "50px" }}
                    fgColor="#000"
                    bgColor="#fff"
                    aria-label={`icon link for ${platform}`}
                    className="border   rounded-full border-black"
                    url={link.url}
                  />
                )}
              </li>
            </Link>
          );
        })}
      </ul>
      <p className="font-md mt-4">
        &copy; obi + müb Entertainment {new Date().getFullYear()}{" "}
      </p>
    </footer>
  );
};

export default Footer;
// ? latest release