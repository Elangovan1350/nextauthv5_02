"use client";

import React from "react";
import { useSession } from "next-auth/react";

const ClientSide = () => {
  const { data: session } = useSession();
  if (!session || !session.user)
    return <div className="text-red-500">You Need To Sign In ClientSide</div>;
  return <div>ClientSide</div>;
};

export default ClientSide;
