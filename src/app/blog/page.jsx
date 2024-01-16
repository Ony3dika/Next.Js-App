import PostCard from '@/components/postCard/postCard';
import React from 'react'

const getData = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}})

  if(!res.ok){
    throw new Error("Error")
  }

  return res.json()
}
const Blogpage = async () => {

  const posts = await getData()
  return (
    <main className='h-fit md:grid md:grid-cols-3 lg:grid-cols-4 gap-x-10 justify-center md:mt-20 mt-10 '>
      {
        posts.map((post=>(
          <PostCard post={post} key={post.id}/>
        )))
      }
    </main>
  );
}

export default Blogpage