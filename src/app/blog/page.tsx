import { PrismaClient } from "@prisma/client"

export type Post = {
  id: number
  title: string
  href: string
  description: string
  datetime: Date
  category: {
    name: string
    href: string
  }
}
export type Posts = Post[]

export default async function Blog() {
  async function getPosts() {
    'use server'
    const prisma = new PrismaClient()
    const posts: Posts = await prisma.post.findMany({
      orderBy: {
        datetime: 'desc'
      },
      include: {
        category: true
      }
    })
    return posts
  }
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-2xl xl:pt-24 pt-16 text-center">
      <h2 className="text-4xl font-bold tracking-tight text-fg sm:text-6xl">
        Content Coming Soon!
      </h2>
      <p className="mt-6 text-base px-10 md:px-0 text-center leading-8 text-fg0">
        I&apos;m currently working on some content for this page. Check back soon!
      </p>
      </div>
    )
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-fg0 sm:text-4xl">from the blog</h2>
          <p className="mt-2 text-lg leading-8 text-fg">
            some of my thoughts and experiences.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-fg pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime.toLocaleDateString()} className="text-fg3">
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
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-fg">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}