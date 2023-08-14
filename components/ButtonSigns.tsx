"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {
  session: any;
};

const ButtonSigns = (session?: any) => {
  return session !== null ? (
    <div>
      <p>signed in as {session.user?.email}</p>
      <button
        className=" border border-black rounded-md p-2"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  ) : (
    <div>
      <p>not signed in</p>
      <button
        className=" border border-black rounded-md p-2"
        onClick={() => signIn()}
      >
        sign in
      </button>
    </div>
  );
};

export default ButtonSigns;
