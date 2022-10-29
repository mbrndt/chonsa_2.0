import React from "react";
import Journal_Comp from "../components/journal_comp";
import Message from "../components/message";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { BsTrash2Fill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

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

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1 className="justify-center text-3xl flex mt-4">Journal</h1>
      <div className="flex">
        <div className="ml-40">
          <Journal_Comp />
        </div>

        <div className=" my-20 p-12 shadow-lg rounded-lg max-w-max mx-auto bg-white">
          <h2 className="text-s2xl">Older Entries:</h2>
          {posts.map((post) => {
            return (
              <Message key={post.id} {...post}>
                <div className="flex gap-4 justify-end mt-8">
                  <button className="flex items-end justify-center gap-2 py-2 text-sm">
                    <BsTrash2Fill className="text-xl" />
                    Delete
                  </button>
                  <button className="flex items-end  gap-2 py-2 text-sm">
                    <AiFillEdit className="text-xl" />
                    Edit
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
