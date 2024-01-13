import PostCard from '@/components/postCard/postCard';
import React from 'react'

const Blogpage = () => {
  return (
    <main className='h-fit md:grid md:grid-cols-3 lg:grid-cols-4 gap-x-10 justify-center md:mt-20 mt-10 '>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  );
}

export default Blogpage