import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({post}) => {
  return (
    <main className='flex h-auto rounded-xl border-border bg-foreground border-2 flex-col mb-5'>
      <section className='h-4/5 p-4 w-full'>
        <img alt='post ' src='/2.jpg' className='object-cover rounded-xl' />
      </section>

      <section className='m-4 h-full p-3 bg-background/50 shadow-xl rounded-xl'>
        <h1 className='font-medium text-copy text-xl '>{post.title}</h1>
        <p className='text-copy-light'>01-10-2024</p>
        <p className='text-copy-lighter truncate'>{post.body}</p>
        <Link
          href={`/blog/${post.id}`}
          className='text-primary-light/70 hover:text-primary-dark'
        >
          READ MORE...
        </Link>
      </section>
    </main>
  );
};

export default PostCard;
