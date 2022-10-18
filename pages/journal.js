import React from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Journal() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  const getData = async () => {
    if (loading) return;
    if (!user) return route.push("/auth/login");
  };

  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div>
      <h1>this is the journal</h1>
      <section>
        <div>journal entrys</div>
      </section>
      <section className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto ">
        <form>
          <label className="gap-4" htmlFor="content">
            new entry:
          </label>
          <div>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              initialValue="hello"
              className="w-full bg-lavenderBg text-red-100 "
            ></textarea>
          </div>
          <div>
            <p>/300</p>
          </div>
          <button>submit</button>
        </form>
      </section>
    </div>
  );
}
