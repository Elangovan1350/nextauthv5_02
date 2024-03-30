import { auth } from "@/app/auth";

import React from "react";

const ServerSide = async () => {
  const session = await auth();
  if (!session || !session.user)
    return <p>You Need To Login First ServerSide</p>;
  return <div>ServerSide</div>;
};

export default ServerSide;
