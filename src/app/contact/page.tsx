"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Contact() {
  return (
    <>
      <div className="mx-auto max-w-2xl xl:pt-24 pt-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-fg0 sm:text-4xl">
          Contact Me
        </h2>
        <p className="mt-2 text-lg leading-8 text-fg">
          Please use the form and I will get back to you as soon as possible.
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-10 max-w-xl l:mt-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-fg"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full bg-bg_h/70 rounded-md border-0 px-3.5 py-2 text-fg shadow-sm ring-1 ring-inset ring-blue hover:ring-blueDim placeholder:text-fg focus:ring-2 focus:ring-inset focus:ring-blue hover:ring-blueDimDim sm:text-sm sm:leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-fg"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full bg-bg_h/70 rounded-md border-0 px-3.5 py-2 text-fg shadow-sm ring-1 ring-inset ring-blue hover:ring-blueDim placeholder:text-fg focus:ring-2 focus:ring-inset focus:ring-blue hover:ring-blueDimDim sm:text-sm sm:leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-fg"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full bg-bg_h/70 rounded-md border-0 px-3.5 py-2 text-fg shadow-sm ring-1 ring-inset ring-blue hover:ring-blueDim placeholder:text-fg focus:ring-2 focus:ring-inset focus:ring-blue hover:ring-blueDimDim sm:text-sm sm:leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-fg"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full bg-bg_h/70 rounded-md border-0 px-3.5 py-2 text-fg shadow-sm ring-1 ring-inset ring-blue hover:ring-blueDim placeholder:text-fg focus:ring-2 focus:ring-inset focus:ring-blue hover:ring-blueDimDim sm:text-sm sm:leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-fg"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full bg-bg_h/70 rounded-md border-0 px-3.5 py-2 text-fg shadow-sm ring-1 ring-inset ring-blue hover:ring-blueDim placeholder:text-fg focus:ring-2 focus:ring-inset focus:ring-blue hover:ring-blueDimDim sm:text-sm sm:leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue px-3.5 py-2.5 text-center text-sm font-semibold text-fg shadow-sm hover:bg-blueDim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </>
  );
}
