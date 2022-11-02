import React from "react";
import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Journal_Comp() {
  //login
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  const routeData = route.query;

  //form state
  const [post, setPost] = useState({ description: "" });

  //submit post
  const submitPost = async (e) => {
    e.preventDefault();

    //run checks for description
    if (!post.description) {
      toast.error("Text field is empty. Please enter a text. ✨", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      //check our user

      return;
    }

    if (post.description.length > 1000) {
      toast.error("Text is too long. Please enter a shorter text. ✨", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    //make a new post
    const collectionRef = collection(db, "posts");
    await addDoc(collectionRef, {
      ...post,
      timestamp: serverTimestamp(),
      user: user.uid,
      avatar: user.photoURL,
      username: user.displayName,
    });
    setPost({ description: "" });
    // return route.push("/");
  };

  useEffect(() => {
    const getData = async () => {
      if (loading) return;
      if (!user) return route.push("/auth/login");
      if (routeData.id) {
        setPost({ description: routeData.description, id: routeData.id });
      }
    };
  }, [user, loading, route, routeData.description, routeData.id]);

  return (
    <div className="sm:text-xl lg:text-base">
      <section className="my-20 p-12 shadow-lg rounded-lg  max-w-max mx-auto bg-white ">
        <form onSubmit={submitPost}>
          <label className="gap-4" htmlFor="content">
            new entry:
          </label>
          <div>
            <textarea
              name="content"
              id="content"
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
              className="w-80 bg-lavenderBg p-2 outline-lavenderDark h-60"
            ></textarea>
            <p
              className={`text-gray-500 font-medium text-sm ${
                post.description.length > 1000 ? "text-red" : ""
              }`}
            >
              {post.description.length}/1000
            </p>
          </div>
          <button type="submit" className="w-full bg-lavenderBg rounded-lg">
            submit
          </button>
        </form>
      </section>
    </div>
  );
}
