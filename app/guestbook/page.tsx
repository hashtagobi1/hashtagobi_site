import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import ButtonSigns from "@/components/ButtonSigns";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
type Props = {};

export default async function Guestbook() {
  // const { data: session } = useSession();
  const session = await getServerSession(authOptions);
  console.log(session);
  console.log("hi");

  return (
    <div className="max-w-2xl flex flex-col justify-center items-center">
      <h1>sign da guestbook ✍️</h1>
      <div>
        <div>
          <input className="border border-black" />
          <button className="border border-black bg-gray-100">sign 🖋️</button>
        </div>
        <ButtonSigns session={session} />
      </div>
    </div>
  );
}
