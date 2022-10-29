import React from "react";
import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Journal from "../pages/journal";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="py-5 flex justify-between bg-lavenderBg min-w-screen">
      <Link href="/">
        <button className=" pl-72 text-3xl font-josefin font-medium">
          chonsa
        </button>
      </Link>

      <ul className="flex items-center gap-5 pr-16">
        {!user && (
          <Link href="/auth/login">
            <a className="py-2 px-4  bg-cyan-500 text-graydark rounded-lg font-medium ml-8">
              sign in
            </a>
          </Link>
        )}

        {user && (
          <div className="flex items-center gap-5 pr-16">
            <Link href={"/journal"}>
              <button>journal</button>
            </Link>
            <button>change theme</button>
            <img
              className="w-12 rounded-full"
              src={user.photoURL}
              alt="user photo"
            />
            <button onClick={() => auth.signOut()}>sign out</button>

            <button>menu</button>
          </div>
        )}
      </ul>
    </nav>
  );
}
