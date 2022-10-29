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

      return;
    }

    if (post.description.length > 300) {
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

  const getData = async () => {
    if (loading) return;
    if (!user) return route.push("/auth/login");
  };

  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div>
      <section className="my-20 p-12 shadow-lg rounded-lg max-w-max mx-auto bg-white">
        <form onSubmit={submitPost}>
          <label className="gap-4" htmlFor="content">
            new entry:
          </label>
          <div>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
              className="w-full bg-lavenderBg p-2 outline-lavenderDark"
            ></textarea>
            <p
              className={`text-gray-500 font-medium text-sm ${
                post.description.length > 300 ? "text-red" : ""
              }`}
            >
              {post.description.length}/300
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
