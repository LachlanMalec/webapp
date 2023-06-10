"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [formState, handleSubmit] = useForm("mayzggyp");

  if (formState.succeeded) {
    return (
      <div className="mx-auto max-w-2xl xl:pt-24 pt-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-fg0 sm:text-4xl">
          Thank you for your message!
        </h2>
        <p className="mt-2 text-lg leading-8 text-fg">
          I will get back to you as soon as possible.
        </p>
      </div>
    );
  }

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
      <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl l:mt-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-fg"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="block w-full bg-bg_h/70 rounded-md border-0 px-3.5 py-2 text-fg shadow-sm ring-1 ring-inset ring-blue hover:ring-blueDim placeholder:text-fg focus:ring-2 focus:ring-inset focus:ring-blue hover:ring-blueDimDim sm:text-sm sm:leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              />
              <ValidationError prefix="Name" field="name" errors={formState.errors} />
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
              <ValidationError prefix="Email" field="email" errors={formState.errors} />
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
              <ValidationError prefix="Message" field="message" errors={formState.errors} />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={formState.submitting}
            className="block w-full rounded-md bg-blue px-3.5 py-2.5 text-center text-sm font-semibold text-fg shadow-sm hover:bg-blueDim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </>
  );
}
