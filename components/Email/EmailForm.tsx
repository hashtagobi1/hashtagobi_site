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
    <div className="flex flex-col justify-center items-center p-4 max-w-2xl ">
      <form
        className=" my-10 border border-gray-500 rounded-lg p-4  flex flex-col justify-center items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="hidden">
          <input type="hidden" name="tags" value="6549457" />
        </div>

        <h2 className="font-bold text-lg underline-offset-2 underline">
          Mailing List 💌
        </h2>

        <p>
          sign up to receive updates from the UK&apos;s Most Entertaining
          Rapper. merch. videos. blog posts. photos. films. etc. etc.
        </p>

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
            {errors.mceFNAME && (
              <span className="mt-2 text-red-500 font-bold text-sm text-center">
                This field is required!
              </span>
            )}
          </div>

          <div className="flex  mt-2 flex-col">
            <label className="font-bold  " id="mceEmail" htmlFor="mceEmail">
              Email:
            </label>
            <input
              className="border p-2 rounded-lg shadow-xl border-black"
              placeholder="MJ@gmail.com"
              type="email"
              {...register("mceEmail", {
                required: true,
              })}
            />
            {errors.mceEmail && (
              <span className="mt-2 text-red-500 font-bold text-sm text-center">
                This field is required!
              </span>
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
