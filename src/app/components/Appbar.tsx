import { auth, signIn, signOut } from "@/app/auth";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Appbar = async () => {
  const session = await auth();
  console.log(session?.user);

  return (
    <div>
      <Link href={"/serverSide"}>ServerSide</Link>
      <br />
      <Link href={"/clientSide"}>ClientSide</Link>
      <br />
      <Link href={"/middlewareSide"}>Middleware</Link>
      {session && session.user ? (
        <div>
          <p>{session.user.id}</p>
          <p>{session.user.email}</p>
          <Image
            className="rounded-full"
            src={session.user.image as string}
            alt={session.user.name as string}
            width={100}
            height={100}
          />
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        </div>
      ) : (
        <div>
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button type="submit">Sign In</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Appbar;
