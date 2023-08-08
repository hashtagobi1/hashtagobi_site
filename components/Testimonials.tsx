"use client";

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Typewriter } from "react-simple-typewriter";
import ImageGallery from "react-image-gallery";
import Image1 from "../public/testimonials/IMG_1487.jpeg";
import Image2 from "../public/testimonials/IMG_1769.jpeg";
import Image3 from "../public/testimonials/IMG_2592.jpeg";
import Image from "next/image";

type Props = {
  text: string[];
};

const image = [
  {
    image: Image1,
  },
  {
    image: Image2,
  },
  {
    image: Image3,
  },
];

const Testimonials = ({ text }: Props) => {
  return (
    <h1>testimonial</h1>
    // <div className=" my-4   ">
    //   <ImageGallery items={<Image src={image}>} />
    // </div>
  );
};

export default Testimonials;
