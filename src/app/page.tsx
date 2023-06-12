import Image from "next/image";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

export default async function Home() {
  async function getLatestPost() {
    "use server";
    const prisma = new PrismaClient();
    const post = await prisma.post.findFirst({
      orderBy: {
        datetime: "desc",
      },
      include: {
        category: true,
      },
    });
    return post;
  }
  const post = await getLatestPost();

  return (
    <>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        {post ? (<div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-fg ring-1 ring-blueDim/80 hover:ring-blueDim/90">
            {post?.title}{" "}
            <Link href="/blog" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read now <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>) : null}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-6xl">
            Lachlan Malec
          </h1>
          <p className="mt-6 text-lg leading-8 text-fg0">
            Hi, I&apos;m Lachlan. Currently I&apos;m studying a Bachelor of
            Information Technology, majoring in Computer Science, at QUT.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-blueDim px-3.5 py-2.5 text-sm font-semibold text-fg shadow-sm hover:bg-blueDim/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Me
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-fg"
            >
              Find out more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
