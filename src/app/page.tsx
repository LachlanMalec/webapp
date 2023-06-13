import Image from "next/image";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

export default async function Home() {
  async function getLatestPosts() {
    "use server";
    const prisma = new PrismaClient();
    const posts = await prisma.post.findMany({
      orderBy: {
        datetime: "desc",
      },
      include: {
        category: true,
      },
      take: 3,
    });
    return posts;
  }
  const posts = await getLatestPosts();

  return (
    <>
      <div className="mx-auto max-w-2xl pt-32 pb-16 sm:pt-48 sm:pb-24 lg:pt-56 lg:pb-27">
        {posts.length > 0 ? (
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-fg ring-1 ring-blueDim/80 hover:ring-blueDim/90">
              {posts[0].title}{" "}
              <Link href="/blog" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read now <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        ) : null}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-6xl">
            Lachlan Malec
          </h1>
          <p className="mt-6 text-lg leading-8 text-fg0 px-7">
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

      <div className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-fg0 sm:text-4xl">
              from the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-fg">
              some of my thoughts and experiences.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-fg pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={post.datetime.toLocaleDateString()}
                    className="text-fg3"
                  >
                    {post.datetime.toLocaleDateString()}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-fg3 hover:bg-gray-100"
                  >
                    {post.category.name}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-fg0 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-fg">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
