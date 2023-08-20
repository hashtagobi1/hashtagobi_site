import React from "react";
import { Redis } from "@upstash/redis";
import moment from "moment";
export const revalidate = 60;
const redis = Redis.fromEnv();
type Props = {
  title: string;
  date: Date;
  params: {
    slug: string;
  };
};

const BlogHeading = async ({ title, date, params }: Props) => {
  const views =
    (await redis.get<number>(
      ["pageviews", "projects", params.slug].join(":")
    )) ?? 0;
  return (
    <div>
      {/* <p className="text-gray-600"> {views} views</p> */}
      <h2
        className="text-4xl 
      text-transparent
      bg-clip-text
      bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
      underline font-bold mt-8 mb-2"
      >
        {title}
      </h2>
      <p className="">
        written by obi <span className=" italic opacity-50">obviously</span>
      </p>
      <p className="mt-2 font-light">
        posted on{" "}
        <span className=" font-bold">
          {moment(date).format("dddd MMMM Do  YYYY, h:mm a")}
        </span>
      </p>
    </div>
  );
};

export default BlogHeading;
