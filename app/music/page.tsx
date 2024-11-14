import React from "react";

export default function Music() {
  return (
    <div className="flex flex-col">
      <div className="p-6">
        <h2 className="font-bold uppercase text-3xl text-center mt-5">
          EP&apos;s
        </h2>
        <div className="musicHolder">
          <div className="">
            <iframe
              src="https://open.spotify.com/embed/album/6eokQyZNcmSIA5bbITHaS1?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="">
            <iframe
              src="https://open.spotify.com/embed/album/7vf8DAscNscqoX4qIcORnl?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="">
            <iframe
              src="https://open.spotify.com/embed/album/5BVZ07TO7woH28wP9NKVvg?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="p-6 flex-col flex">
        <h2 className="font-bold uppercase text-3xl text-center mt-5">
          Singles
        </h2>
        <div className="musicHolder ">
          <div className="">
            <iframe
              src="https://open.spotify.com/embed/album/1omIh8T1ZEoujtfuuU4ajc?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://open.spotify.com/embed/album/5pVLreqdf7V9ULr61MLm0a?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://open.spotify.com/embed/album/1pkPod46zfnXiWhwjwHVVt?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://open.spotify.com/embed/track/4K6b23GUSrqYr6ehqVAUSy?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
