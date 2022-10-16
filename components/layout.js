import Nav from "./Nav";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Layout({ children }) {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  useEffect(() => {
    if (!user) {
      route.push("/auth/login");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <div className="font-josefin ">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
