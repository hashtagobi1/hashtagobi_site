"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type InputProps = {
  name: string;
  email: string;
  errorName: string;
  errorEmail: string;
};

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputProps>();
  console.log(watch("name"));

  const onSubmit: SubmitHandler<InputProps> = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md  flex flex-col ">
        <label id="name" htmlFor="name">
          Name:
        </label>
        <input
          className="border border-black"
          placeholder="Michael Jackson"
          {...register("name", {
            required: true,
          })}
        />
        {errors.name && <p className="text-red-500">This field is required</p>}
      </div>
      <button className="rounded-md mt-4 border border-black " type="submit">
        Sign Up 👍🏾
      </button>
    </form>
  );
};

export default EmailForm;
