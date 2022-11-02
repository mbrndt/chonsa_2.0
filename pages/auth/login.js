import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import dogtreat from "../../utils/images/dogtreat.png";
import Image from "next/image";

export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  //Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      route.push("/");
    } else {
      console.log("login");
    }
  }, [user, route]);

  return (
    <div className="shadow-xl mt-4 mb-20 mx-10 p-10 text-gray-700 rounded-lg flex-col flex items-center min-h-screen bg-opacity-60 backdrop-filter backdrop-blur-lg ">
      {/* <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 text-center"> */}
      <h1 className="text-2xl font-bold text-center mb-10">
        Welcome to Chonsa, your new favourite online bullet journal!
      </h1>
      <Image src={dogtreat} alt="dogtreat" width={100} height={100} />
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-nowrap">
        {/* sign in */}
        <div className="bg-lavenderLg max-w-lg mt-8 p-8 shadow-md lg:px-44 rounded-lg basis-1/2 flex-1 bg-opacity-60 backdrop-filter backdrop-blur-lg">
          <p className="text-center text-2xl pb-6">Sign In</p>
          <form action="" className="flex-row ">
            <p className="pt-2 pb-1">email:</p>
            <input
              type="text"
              id="email"
              placeholder="email"
              rounded-sm
              border-solid
              className="pl-2"
            />
            <p className="pb-1 pt-4">password:</p>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="pl-2"
            />

            <button className="underline text-xs text-right flex pl-16 pt-2 decoration-dotted hover:text-lavenderDark">
              forgot password?
            </button>

            <button className="mt-8 w-40 bg-lavenderDark rounded-lg shadow-sm hover:text-white  bg-opacity-60 backdrop-filter backdrop-blur-lg">
              login
            </button>
          </form>

          <div className="text-graysoft">
            {" "}
            <button
              onClick={GoogleLogin}
              className="rounded-lg -ml-4 flex mt-14 mb-4 text-graydark hover:text-graysoft"
            >
              {" "}
              or login using these:
              <FcGoogle className="text-2xl ml-2" />
            </button>
          </div>
        </div>

        {/* sign up */}
        <div className="bg-blueLg max-w-lg mt-10 p-10 pb28 shadow-md rounded-lg basis-1/2 flex-1 bg-opacity-60 backdrop-filter backdrop-blur-lg">
          <p className="mt-4 text-center text-2xl pb-6">Sign Up</p>

          <button className="w-80 p-2 bg-white rounded-lg shadow-sm hover:text-lavenderDark bg-opacity-60 backdrop-filter backdrop-blur-lg">
            create new account with your email address
          </button>
          <button
            onClick={GoogleLogin}
            className="rounded-lg flex mt-10 ml-14 mb-4 text-graydark hover:text-lavenderDark"
          >
            {" "}
            or sign up using these:
            <FcGoogle className="text-2xl ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
