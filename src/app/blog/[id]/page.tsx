import { PrismaClient } from "@prisma/client";
import Error from "next/error";

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const postId = parseInt(id);

  async function getPost() {
    "use server";
    const prisma = new PrismaClient();
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        category: true,
      },
    });
    return post;
  }
  const post = await getPost();

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl xl:pt-24 pt-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-fg sm:text-6xl">
          Post Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 xl:pt-24 pt-16">
        <h2 className="text-3xl font-bold tracking-tight text-fg0 sm:text-4xl">
          {post?.title}
        </h2>
        <p className="mt-2 text-lg leading-8 text-fg">
          {post?.datetime.toLocaleDateString("en-AU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          &middot; {post?.category.name}
        </p>
      </div>
      <div className="mx-auto mt-2 max-w-2xl border-t border-fg pt-10 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none">
        <div className="prose prose-lg text-fg">{post?.description}</div>
      </div>
    </div>
  );
}
