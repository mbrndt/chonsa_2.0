import Head from "next/head";
import Calendar from "../components/calendar";
import Journal from "../pages/journal";
import Taskbox from "../components/taskbox/taskbox";
import lavender1 from "../utils/images/lavender1.png";
import lavender2 from "../utils/images/lavender2.png";
import Collections from "../components/collections";
import MoodTracker from "../components/moodTracker";
import WaterTracker from "../components/waterTracker";
import Image from "next/image";
import Pomodoro from "../components/pomodoro";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Journal_Comp from "../components/journal_comp";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  useEffect(() => {
    if (user) {
      route.push("/");
    } else {
      console.log("login");
    }
  }, [user]);
  return (
    <div>
      <Head>
        <title>Chonsa Online Bullet Journal</title>
        <meta
          name="description"
          content="developed with love by mareike brandt"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="home" className=" px-10:px-20 lg:px-40">
        <section className="min-h-screen mt-5">
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-nowrap">
            <div className="basis-1/4 flex-1 text-center  p-10 rounded-xl my-10 bg-lavenderBg">
              <Calendar />
              <Journal_Comp />
            </div>
            <div className="basis-1/4 flex-1 text-center p-10 rounded-xl my-10 bg-lavenderBg">
              <Taskbox />
            </div>
            <div className=" bg-lavenderDark basis-1/4 flex-1 text-center  p-10 rounded-xl my-10 bg-gradient-to-b from-neutral-100 to-transparent">
              <h1 className="leading-none text-amber-400 flex pt-8 pb-2 justify-center flex-wrap">
                <Image
                  src={lavender1}
                  alt="lavender"
                  width={200}
                  height={200}
                />
                <Collections />
                <Pomodoro />
              </h1>
            </div>
            <div className=" bg-lavenderBg basis-1/4 flex-1 text-center p-10 rounded-xl my-10 ">
              <MoodTracker />
              <WaterTracker />
              <Image src={lavender2} alt="lavender" width={200} height={200} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
