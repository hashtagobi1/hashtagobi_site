import EmailForm from "@/components/Email/EmailForm";
import Image from "next/image";
import React from "react";
type Props = {};

const NewGig = (props: Props) => {
  return (
    <div className="flex flex-col justify-center text-center items-center p-4 ">
      <div className=" max-w-2xl gap-6 border border-black p-4 rounded-lg">
        <div>
          <h2 className="text-lg font-bold mt-8 mb-2">
            playing guitar & rapping about FUPA in Peckham
          </h2>
          <p className="italic">
            written by obi <span className="opacity-50">obviously</span>
          </p>
          <p className="mt-2 font-light">00:37am, Fri 11th Aug</p>
        </div>
        <div className="mt-10">
          <p className="mb-4">
            As I write this, I was panicking, screaming &ldquo;FUCK!
            NOOOO!!&rdquo; as im currently in East London &amp; thought I left
            my <span className="font-bold">shiny MacBook Pro</span> that i
            DEFINITeLY can&apos;t afford to replace right now ALLLL the way in
            South London&#8230; I turned around and it&rsquo;s literally on my
            desk guys&#8230;.. A solid sign that I should be sleeping right now.
            especially as I&rsquo;m up for like 7am to do some filming but I
            wanna make a quick blog post coz I said I&rsquo;d be consistent.
          </p>
          <div className="my-4">
            <video controls src={"/blog/peckham/fupa.MOV"} />
          </div>
          <p className="mb-4">
            idek what I want to say here really. Was a v fun gig. never really
            get nervous but when you&rsquo;re the first act to open it&rsquo;s
            always a bit like
          </p>
          <p className="font-bold mb-1">&quot;ooooh scary&quot;</p>
          <p className="font-bold mb-1 ">
            &quot;are even ppl even gonna turn up this early??&quot;
          </p>
          <p className="mb-4">
            But with most things in life, it&rsquo;s always fine lol.
          </p>
          <p className="mb-4">
            Working with a new booking agent tonight so im excited to hear the
            feedback tomorrow.
          </p>
          <div className="my-4 flex-col flex justify-center items-center">
            <Image
              alt="image of sticker"
              width="400"
              height={"400"}
              src={"/blog/peckham/sticker.jpg"}
            />
            <p>yeee we selling stickers baby</p>
          </div>
          <p className="mb-4">
            tried out some new things tonight, debuted a new song called “Fupa”
            (hold tight all my Fupa-tic kweens”). Played guitar whilst rapping
            too which was new for me. Still need to work on that multi-tasking
            ability tho 😂 — kinda forgot to rap at a point as I was strumming
            lmao. In due time, gotta keep trying new things.
          </p>
          <div className="my-4">
            <video controls src={"/blog/peckham/guitar.MOV"} />
          </div>
          <p className="mb-4">
            Sold some stickers as well which was coooooool ! All my t-shirts
            sold out at a show I did months ago &amp; I&rsquo;m planning to
            restock with hats/trousers/shorts full co-ord etc. just need to
            spend &pound;7000 on product&#8230; aha. (if you&rsquo;re one of the
            promoters who owe me money whilst reading this &mdash; transfer my
            fucking p&rsquo;s).
          </p>
          <p className="mb-4">
            Gonna sleep now so imma leave u all with a video from a new fan
            tonight.
          </p>
          <div className="my-4">
            <video controls src={"/blog/peckham/fan_new.MP4"} />
          </div>
          <div>
            <h3 className="font-bold text-xl">
              Listen to the song they were talking about here 😂
            </h3>
            <div className="musicLink">
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
      <EmailForm />
    </div>
  );
};

export default NewGig;
