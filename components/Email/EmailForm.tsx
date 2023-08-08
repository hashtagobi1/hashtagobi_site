"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import jsonp from "jsonp";
import toast from "react-hot-toast";

type InputProps = {
  mceFNAME: string;
  mceEmail: string;
  errorName: string;
  errorEmail: string;
};

type DataSubmit = {
  result: string;
  msg: string;
};

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputProps>();

  const onSubmit: SubmitHandler<InputProps> = ({
    errorEmail,
    errorName,
    mceEmail,
    mceFNAME,
  }) => {
    const url =
      "https://hashtagobi.us19.list-manage.com/subscribe/post-json?u=4df1b380107ad91f9019eb9f9&amp;id=c4a4a06b53&amp;f_id=002e83e4f0";

    jsonp(
      `${url}&EMAIL=${mceEmail}&FNAME=${mceFNAME}`,
      { param: "c" },
      (_, data: DataSubmit) => {
        if (data.result === "success") {
          toast.success(`${data.msg}`);
        }
        if (data.result === "sending") {
          toast.loading("Please wait...");
        }
        if (data.result === "error") {
          toast.error("Woops! Please try again.");
        }
        console.log({ data });
      }
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="font-bold text-xl text-center">
          &quot;The most entertaining rapper in the uk&quot;
        </h1>
        <p className="text-sm max-w-md">
          Exclusive Access to new merch, free/discounted tickets, updates on
          &quot;obi&apos;s diary&quot;. First to know on vlogs/music/shoots
        </p>
      </div>
      <form
        className=" my-10 border border-gray-500 rounded-lg p-4  flex flex-col justify-center items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="hidden">
          <input type="hidden" name="tags" value="6549457" />
        </div>

        <div className="flex justify-center items-center flex-col p-8 gap-6">
          <div className="flex  mt-2 flex-col">
            <label className="font-bold " id="mceFNAME" htmlFor="mceFNAME">
              Name:
            </label>
            <input
              className="border p-2 rounded-lg shadow-xl border-black"
              placeholder="Michael Jackson"
              {...register("mceFNAME", {
                required: true,
              })}
            />
            {errors.mceFNAME ? (
              toast.error("Please enter a valid name", {
                duration: 1500,
                className: "font-bold",
              })
            ) : (
              <p className="hidden"></p>
            )}
          </div>

          <div className="flex  mt-2 flex-col">
            <label className="font-bold  " id="mceEmail" htmlFor="mceEmail">
              Email:
            </label>
            <input
              className="border p-2 rounded-lg shadow-xl border-black"
              placeholder="michael@gmail.com"
              type="email"
              {...register("mceEmail", {
                required: true,
              })}
            />
            {errors.mceFNAME ? (
              toast.error("Please enter a valid email", {
                duration: 1500,
                className: "font-bold",
              })
            ) : (
              <p className="hidden"></p>
            )}
          </div>
        </div>

        <button
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="rounded-md  capitalize shadow-md w-4/5 mt-4 border bg-black text-white p-3"
        >
          sign up 👍🏾
        </button>

        {/* <input
          defaultValue={"sign up 👍🏾"}
          className="rounded-md cursor-pointer capitalize  shadow-md w-4/5 mt-4 border bg-black text-white p-3 "
          type="submit"
          name="subscribe"
          disabled={true}
          id="mc-embedded-subscribe"
        /> */}
      </form>
    </div>
  );
};

export default EmailForm;

// <form action="" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate="">
// <label for="mce-EMAIL">Email Address</label>
// <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="">

// <label for="mce-FNAME">First Name</label>
// <input type="text" name="FNAME" class="required text" id="mce-FNAME" required="" value="">

// <input type="submit" class="button" value="Subscribe"></input>
