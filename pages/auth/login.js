import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

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
  }, [user]);

  return (
    <div className="shadow-xl mt-12 mx-10 p-10 text-gray-700 rounded-lg flex-col flex items-center">
      {/* <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 text-center"> */}
      <h1 className="text-2xl font-bold text-center mb-20">
        Welcome to Chonsa, your new favourite online bullet journal!
      </h1>

      {/* sign in */}
      <div className="bg-lavenderLg pl-40 pr-40 pt-5 shadow-md">
        <p className="text-center">Sign In</p>
        <form action="" className="flex-row ">
          <p className="pt-2 pb-1">email:</p>
          <input
            type="text"
            id="email"
            placeholder="email"
            rounded-sm
            border-solid
          />
          <p className="pb-1 pt-4">password:</p>
          <input type="password" id="password" placeholder="password" />
        </form>
        <div className="text-graysoft">
          {" "}
          <button
            onClick={GoogleLogin}
            className="font-medium rounded-lg flex mt-4 mb-4 text-graydark hover:text-lavenderDark"
          >
            {" "}
            or using these:
            <FcGoogle className="text-2xl ml-2" />
          </button>
        </div>
      </div>

      {/* sign up */}
      <div className="bg-blueLg max-w-lg mt-10 p-10 shadow-md">
        <p className="mt-4 pb-2 text-center">Sign Up</p>
        <p className="p-4">
          ... oh, are you new here?{" "}
          <button className="ml-14 w-40 p-2 bg-lavenderBg rounded-lg shadow-sm hover:text-lavenderDark">
            create new account
          </button>
        </p>
      </div>

      {/* <div className="">
        <div className="py-4 flex shadow-sm rounded-lg flex-col max-w-md ">
          <div className="bg-lavenderLg">
            <h2 className="py-4 mr-10">Sign In </h2>
            <form action="" className="flex-col flex gap-7">
              <div className="flex gap-20 ml-4">
                <p>e-mail: </p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="py-2 px-4 border-1 "
                />
              </div>
              <div className="flex gap-14 ml-4">
                <p className="">password: </p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="py-2 px-4 border-1 "
                />
              </div>
              <button className="text-xs justify-end flex mr-4 mb-4">
                forgot password?
              </button>
            </form>
            <button type="submit" className="">
              log in
            </button>
          </div>
         
        </div> */}
    </div>
  );
}
