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
      underline font-bold mt-8 mb-2"
      >
        {title}
      </h2>
      <p className="">
        written by obi{" "}
        <span className=" italic opacity-25">{"(obviously)"}</span>
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
