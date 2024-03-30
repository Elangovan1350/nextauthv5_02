import { redirect } from "next/navigation";
import React from "react";
import { auth, signIn } from "../auth";

const Middle = async () => {
  const session = await auth();
  if (!session || !session.user) {
    await signIn();
  }

  return <div>Middle</div>;
};

export default Middle;
