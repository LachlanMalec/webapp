import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-slate-400 ring-1 ring-gray-900/10 dark:ring-slate-400/20 hover:ring-gray-900/20 dark:ring-slate-400/10">
            My latest blog title.{" "}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read now <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight dark:text-gray-100 text-gray-900 sm:text-6xl">
            Lachlan Malec
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400">
            Hi, I&apos;m Lachlan. Currently I&apos;m studying a Bachelor of Information
            Technology, majoring in Computer Science, at QUT.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-400"
            >
              Find out more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
