import { auth, signIn, signOut } from "@/app/auth";
import Image from "next/image";

import React from "react";

const Appbar = async () => {
  const session = await auth();
  console.log(session?.user);

  return (
    <div>
      {session && session.user ? (
        <div>
          <p>{session.user.id}</p>
          <p>{session.user.email}</p>
          <Image
            src={session.user.image as string}
            alt={session.user.name as string}
            width={50}
            height={50}
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
