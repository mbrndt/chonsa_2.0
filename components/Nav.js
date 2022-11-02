import React from "react";
import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

import Journal from "../pages/journal";
import Image from "next/image";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  const route = useRouter();

  const signOut = () => {
    auth.signOut();
    route.push("/auth/login");
  };

  return (
    <nav className="py-5 flex max-w-full justify-between bg-lavenderBg ">
      <Link href="/">
        <button className=" pl-72 text-3xl font-josefin font-medium flex">
          chonsa{" "}
        </button>
      </Link>

      <ul className="flex items-center gap-5 pr-16">
        {!user && (
          <Link href="/auth/login">
            <p className="py-2 px-4 text-graydark rounded-lg font-medium ml-8 w-screen justify-end flex">
              sign in
            </p>
          </Link>
        )}

        {user && (
          <div className="flex items-center gap-5 pr-16">
            <Link href={"/journal"}>
              <button>journal</button>
            </Link>
            <button>change theme</button>
            {/* 
            <Image
              className="w-12 rounded-full"
              // src={user.photoURL}
              src={user?.photourl}
              alt="user photo"
              width={50}
              height={50}
            /> */}
            <button onClick={() => signOut()}>sign out</button>

            <button>menu</button>
          </div>
        )}
      </ul>
    </nav>
  );
}
