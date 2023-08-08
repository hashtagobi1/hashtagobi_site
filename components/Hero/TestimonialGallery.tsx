"use client";

import React from "react";
import Gallery from "react-photo-gallery";
import { TestimonialImages } from "./HeroGallery";

type Props = {};

const TestimonialGallery = (props: Props) => {
  return <Gallery photos={TestimonialImages}

  
  columns={6}/>;
};

export default TestimonialGallery;
