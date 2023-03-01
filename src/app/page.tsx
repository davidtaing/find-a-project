import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="m-h-screen md: prose  prose-xl prose-stone w-full max-w-full p-4 dark:prose-invert md:p-0"
      aria-label="Home Page"
    >
      <section className="mx-auto my-20 grid h-96 max-w-6xl grid-cols-4 md:mb-0 lg:grid-cols-12 lg:gap-6">
        <div className="col-span-4 my-auto text-center lg:col-span-6 lg:text-left">
          <h1 className="font-medium">Work towards your dream job</h1>
          <div className="flex flex-col-reverse items-center gap-3 lg:flex-row lg:gap-6">
            <button className="rounded border border-blue-600 bg-blue-600 px-3 py-2 text-stone-50 hover:bg-blue-800">
              Join a Project
            </button>
            <span>or</span>
            <button className="rounded border border-stone-900 px-3 py-2 hover:bg-stone-800 hover:text-stone-50 dark:border-stone-800 dark:bg-stone-800 hover:dark:bg-stone-700">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
      <section className="mx-auto mb-20 grid max-w-6xl grid-cols-4 gap-6 lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-12">
          <h2 className="text-center">Featured Projects</h2>
        </div>
        <article className="col-span-4 h-80 rounded-md border border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-800 lg:col-span-6">
          Project 1
        </article>
        <article className="col-span-4 h-80 rounded-md border border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-800 lg:col-span-6">
          Project 2
        </article>
        <article className="col-span-4 h-80 rounded-md border border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-800">
          Project 3
        </article>

        <article className="col-span-4 h-80 rounded-md border border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-800">
          Project 4
        </article>
        <article className="col-span-4 h-80 rounded-md border border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-800">
          Project 5
        </article>
      </section>

      <section className="mx-auto mb-20 grid max-w-6xl grid-cols-4 gap-6 lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-12">
          <h2 className="text-center">Here&apos;s How You Can Win!</h2>
        </div>
        <article className="col-span-4 rounded-md border border-stone-300 bg-stone-100 p-6 text-center dark:border-stone-800 dark:bg-stone-800 lg:col-span-3">
          <p className="m-0">🎯</p>
          <p className="m-0 font-medium">Build In-Demand Skills</p>
        </article>
        <article className="col-span-4 rounded-md border border-stone-300 bg-stone-100 p-6 text-center dark:border-stone-800 dark:bg-stone-800 lg:col-span-3">
          <p className="m-0">💪</p>
          <p className="m-0 font-medium">Showcase Your Work</p>
        </article>
        <article className="col-span-4 rounded-md border border-stone-300 bg-stone-100 p-6 text-center dark:border-stone-800 dark:bg-stone-800 lg:col-span-3">
          <p className="m-0">🤝</p>
          <p className="m-0 font-medium">Make New Friends</p>
        </article>
        <article className="col-span-4 rounded-md border border-stone-300 bg-stone-100 p-6 text-center dark:border-stone-800 dark:bg-stone-800 lg:col-span-3">
          <p className="m-0">🧑‍🎓</p>
          <p className="m-0 font-medium">Work With Mentors</p>
        </article>
      </section>

      <section className="mx-auto mb-20 grid max-w-6xl grid-cols-4 lg:grid-cols-12 lg:gap-6">
        <div className="col-span-4 lg:col-span-12">
          <h2 className="text-center">About Find a Project</h2>
        </div>
        <div className="col-span-4 rounded-md border border-stone-300 bg-stone-100 p-6 dark:border-stone-800 dark:bg-stone-800 lg:col-span-6 lg:col-start-4">
          <div className="flex items-center gap-4 ">
            <Image
              className="m-0 rounded-full"
              src="/assets/teeang_portrait.png"
              alt="Portrait of David"
              width="60"
              height="60"
            />
            <span className="text-lg">David Taing</span>
          </div>
          <p className="text-base">
            I recently made the transistion from Property Management and have
            just started working as a Software Developer.
          </p>
          <p className="text-base">
            Code.Sydney provided me with a safe space for me to learn, to grow
            and to make mistakes. Without Code.Sydney and Open Source, I would
            not be where I am today.
          </p>
          <p className="text-base">
            That&apos;s why I am building this project.
          </p>
        </div>
      </section>

      <section className="mx-auto mb-20 grid max-w-6xl grid-cols-4 gap-6 lg:grid-cols-12">
        <div className="col-span-12 text-center">
          <h2>Join the community</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quam et perspiciatis commodi illo eius, laborum dolore minus quidem
            nulla, ratione provident assumenda! Nostrum architecto recusandae
            voluptates praesentium sequi. Ex?
          </p>
        </div>
      </section>
    </main>
  );
}
