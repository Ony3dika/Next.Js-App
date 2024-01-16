import PostUser from "@/components/postUser/postUser";
import Image from "next/image";
import { Suspense } from "react";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <main className='flex md:justify-start md:items-start items-center md:flex-row flex-col p-6 rounded-xl border-border border-2 bg-foreground md:mt-20 mt-10'>
      <section className='h-72 md:h-96 relative md:w-auto w-72 md:basis-2/5 lg:basis-1/3'>
        <Image alt='post-image' className='rounded-xl z-0' src='/2.jpg' fill />
      </section>

      <section className='basis-2/3 self-center md:ml-8 md:mt-0 mt-5 bg-background/50 p-4 rounded-xl'>
        <h1 className=' text-copy text-xl md:text-5xl font-semibold'>
          {post.title}
        </h1>
        <Suspense fallback={<div className="text-copy">Loading...</div>}>
          <PostUser userId={post.userId} />
        </Suspense>

        <p className='text-copy-light my-2'>Published: 01-10-2024</p>

        <p className='text-copy-lighter'>
          <span className='underline'>Description:</span> <br />
          {post.body}
        </p>
      </section>
    </main>
  );
};

export default SinglePostPage;
