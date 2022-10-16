import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="py-5 flex justify-between bg-lavenderBg min-w-screen">
      <Link href="/">
        <button className=" pl-72 text-3xl font-josefin font-medium">
          chonsa
        </button>
      </Link>

      <ul className="flex items-center gap-5 pr-16">
        <button>change theme</button>
        <Link href="/auth/login">
          <a className="py-2 px-4  bg-cyan-500 text-white rounded-lg font-medium ml-8">
            sign in
          </a>
        </Link>
        <button>menu</button>
      </ul>
    </nav>
  );
}
