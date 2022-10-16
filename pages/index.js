import Head from "next/head";
import Calendar from "../components/calendar";
import Journal from "../components/journal";
import Taskbox from "../components/taskbox";

export default function Home() {
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
            <div className=" basis-1/3 flex-1 text-center  p-10 rounded-xl my-10 bg-neutral-100">
              <Calendar />
              <Journal />
            </div>
            <div className="basis-1/3 flex-1 text-center p-10 rounded-xl my-10 bg-neutral-100">
              <Taskbox />
            </div>
            <div className="basis-1/3 flex-1 text-center  p-10 rounded-xl my-10 bg-gradient-to-b from-neutral-100 to-transparent">
              <h1 className="leading-none text-amber-400 flex pt-8 pb-2 justify-center">
                <p className="font-medium text-sm pb-2">Add more</p>
              </h1>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
