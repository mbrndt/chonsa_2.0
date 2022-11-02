import React from "react";
import Journal_Comp from "../components/journal_comp";
import Message from "../components/message";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import {
  collection,
  orderBy,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { BsTrash2Fill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import Link from "next/link";

export default function Journal({ children }) {
  //create a state for the posts
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  };

  //delete post
  const deletePost = async (id) => {
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="sm:text-xl text-2xl lg:text-base ">
      <h1 className="justify-center text-3xl flex mt-4 ">Journal</h1>
      <div className="flex flex-wrap">
        <div className="ml-40" id="journal">
          <Journal_Comp />
        </div>

        <div className=" my-20 p-12 shadow-lg rounded-lg mx-auto bg-white">
          <h2 className="text-2xl">Older Entries:</h2>
          {posts.map((post) => {
            return (
              <Message key={post.id} {...post}>
                <div className="flex gap-4 justify-end mt-8">
                  <button
                    onClick={() => deletePost(post.id)}
                    className="flex items-end justify-center gap-2 py-2 md:text-sm sm:text-xl"
                  >
                    <BsTrash2Fill className="text-xl" />
                    Delete
                  </button>
                </div>
              </Message>
            );
          })}
        </div>
      </div>
    </div>
  );
}
