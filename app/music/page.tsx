import React from "react";

export default function Music() {
  return (
    <div className="flex flex-col">
      <div className="p-6">
        <h2 className="font-bold uppercase text-3xl text-center my-10">
          Singles
        </h2>
        <div className="musicHolder">
          <div>
            <iframe
              src="https://open.spotify.com/embed/track/2nQwrsPslsOk6gctacZOof?utm_source=generator"
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
          <div>
            <iframe
              src="https://open.spotify.com/embed/track/1rqC7KwYqdeLCtpijqvwUs?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h2 className="font-bold uppercase text-3xl text-center my-10">
          EP&apos;s
        </h2>
        <div className="musicHolder">
          <div>
            <iframe
              src="https://open.spotify.com/embed/album/7vf8DAscNscqoX4qIcORnl?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div>
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
    </div>
  );
}
