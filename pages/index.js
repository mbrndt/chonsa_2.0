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
import ChangingPicture from "../components/changingPicture";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  useEffect(() => {
    if (!user) {
      route.push("/auth/login");
    }
  }, [user, route]);

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

      <main
        id="home"
        className=" mx-5 sm:text-xl text-2xl lg:text-base lg:mx-10 lg:px-10"
      >
        <section>
          <div className="flex gap-10 py-10 flex-wrap justify-center md:flex-shrink-0 lg:flex-nowrap">
            <div className="basis-1/4 w-24 min-w-min text-center p-10 rounded-xl my-10 bg-lavenderDark ">
              <Calendar />
              <Journal_Comp className="max-w-md" />
            </div>
            <div className="basis-1/4 min-w-min text-center p-10 rounded-xl my-10 bg-lavenderBg">
              <Taskbox />
              <ChangingPicture />
            </div>
            <div className=" bg-lavenderDark min-w-min basis-1/4 text-center p-10 rounded-xl my-10 bg-gradient-to-b from-neutral-100 to-transparent">
              <h1 className="flex pt-8 pb-2 justify-center flex-wrap">
                <Image
                  src={lavender1}
                  alt="lavender clouds in front of a blue sky"
                  width="auto"
                  height="auto"
                />
                <Collections />
                <Pomodoro />
              </h1>
            </div>
            <div className=" bg-lavenderBg basis-1/4 min-w-min text-center p-10 rounded-xl my-10 ">
              <MoodTracker />
              <WaterTracker />
              <Image
                src={lavender2}
                alt="table with office supplies like a laptop in front of a screen, a plant, a mousepad with mouse"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
