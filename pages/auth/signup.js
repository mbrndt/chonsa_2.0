import { ArrowLeft } from "tabler-icons-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "../../constants";
import { useFormik } from "formik";
import { TimedImage } from "react-timed-image";
import ChangingPicture from "../../components/changingPicture";

export default function SignUp() {
  const imageArray = [
    images.christmasTree,
    images.girlStanding,
    images.hotChoco,
    images.snowman,
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count + 1);
    }, 3600000);

    return () => clearInterval(timerId);
  }, []);

  const image = imageArray[count % imageArray.length];

  //Formik Logics
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      terms: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className=" shadow-xl mt-4 mb-40 mx-10 p-10 text-gray-700 rounded-lg flex-col flex items-center bg-opacity-60 backdrop-blur-lg ">
      <div className="flex items-start ">
        {" "}
        <Link href="/auth/login">
          <button className="flex py-1 pl-20 items-start flex-row bg-lavenderLg rounded-lg bg-opacity-40 backdrop-blur-lg">
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
              <label
                className="block text-sm pb-2 font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border-2 border-graysoft text-sm p-2 rounded-md w-1/2 focus:outline-none focus:ring focus:ring-lavenderDark"
                type="password"
                name="password"
                placeholder="Enter your strong password"
              />
            </div>
            <div className="mt-6">
              <label className="block text-sm pb-2 font-bold" htmlFor="terms">
                Terms and Conditions
              </label>
              <div className="flex items-center gap-2">
                <input
                  className="h-5 w-5 text-lavenderDark focus:outline-none focus:ring focus:ring-lavenderBg"
                  type="checkbox"
                  name="terms"
                  value="checked"
                />
                <p className="text-sm font-latoBold text-graydark">
                  {" "}
                  I agree to the Terms and Service that my data will be taken
                  and sold.
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="text-sm text-white bg-lavenderDark rounded-lg w-full py-3 mt-6"
            >
              Start journaling today
            </button>
          </div>
          <div className="flex items-center mr-10">
            <ChangingPicture />
          </div>
        </form>
      </div>
    </div>
  );
}
