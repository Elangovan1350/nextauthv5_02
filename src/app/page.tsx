import Image from "next/image";
import { auth } from "./auth";

export default async function Home() {
  const sesstion = await auth();
  return (
    <div className="flex h-screen justify-center items-center">
      <h1>
        {sesstion?.user ? <p>{sesstion.user.name}</p> : <p>Login First</p>}
      </h1>
    </div>
  );
}
