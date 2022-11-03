import { ArrowLeft } from "tabler-icons-react";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="h-fit shadow-xl mt-4 mb-40 mx-10 p-10 text-gray-700 rounded-lg flex-col flex items-center bg-opacity-60 backdrop-blur-lg ">
      <div className="flex w-screen align-middle ">
        {" "}
        <Link href="/auth/login">
          <button className="flex py-1 pl-20 flex-row bg-lavenderLg rounded-lg bg-opacity-40 backdrop-blur-lg">
            <ArrowLeft size={20} strokeWidth={2} />
            <p className="px-1 pr-2"> back</p>
          </button>
        </Link>
      </div>
      <div className="h-fit flex justify-center mb-20">
        <form className="bg-lavenderLg flex rounded-lg w-1/2">
          <div className="flex-1 p-20">
            <h1 className="text-3xl pb-2">Lets get started 👋</h1>
            <p className="text-lg text-graydark">
              Join our bullet journal platform today and start making your life
              a bit easier. Start your daily journal, track your habits, and
              keep all your notes in one place.
            </p>
            <div className="mt-6">
              <label className="block text-sm pb-2 font-bold" htmlFor="name">
                Name
              </label>
              <input
                className="border-2 border-graysoft p-2 rounded-md w-1/2 focus:outline-none focus:ring focus:ring-lavenderDark"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mt-6">
              <label className="block text-sm pb-2 font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-graysoft p-2 rounded-md w-1/2 focus:outline-none focus:ring focus:ring-lavenderDark"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-6">
              <label className="block text-sm pb-2 font-bold" htmlFor="terms">
                Terms and Conditions
              </label>
              <input
                className="h-5 w-5 text-lavenderDark focus:outline-none focus:ring focus:ring-lavenderBg"
                type="checkbox"
                name="terms"
                value="checked"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
