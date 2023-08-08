"use client";

import React, { useState } from "react";
import Lightbox from "react-spring-lightbox";

export const TestimonialImages = [
  {
    src: "/testimonials/IMG_1487.jpeg",
    alt: "image",
    width: 4,
    height: 3,
  },
  {
    src: "/testimonials/IMG_1769.jpeg",
    alt: "image",
    width: 4,
    height: 3,
  },
  {
    src: "/testimonials/IMG_2649.jpeg",
    alt: "image",
    width: 8,
    height: 6,
  },
  {
    src: "/testimonials/IMG_2911.jpeg",
    alt: "image",
    width: 4,
    height: 3,
  },
  {
    src: "/testimonials/IMG_2592.jpeg",
    alt: "image",
    width: 4,
    height:3,
  },
  {
    src: "/testimonials/IMG_2627.jpeg",
    alt: "image",
    width: 2,
    height: 1,
  },
  {
    src: "/testimonials/IMG_2653.jpeg",
    alt: "image",
    width: 1,
    height: 1,
  },
  {
    src: "/testimonials/Screenshot 2023-05-20 at 15.16.42.png",
    alt: "image",
    width: 4,
    height: 3,
  },
];

const HeroGallery = () => {
  const [currentImageIndex, setCurrentIndex] = useState(0);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < TestimonialImages.length &&
    setCurrentIndex(currentImageIndex + 1);

  return (
    <Lightbox
      isOpen={true}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={TestimonialImages}
      currentIndex={currentImageIndex}
      className="max-w-sm"
    />
  );
};

export default HeroGallery;
