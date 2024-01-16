import React from 'react'
import Image from 'next/image';

const getData = async (userId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"} );

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
};

const PostUser = async ({userId}) => {

  const user = await getData(userId)
  return (
    <div className='flex items-center md:mt-5 mt-3'>
      <Image
        src='/noavatar.png'
        alt='avatar'
        className=' rounded-full'
        height={32}
        width={32}
      />
      <p className='text-copy-light ml-2'>Author: {user.username}</p>
    </div>
  );
}

export default PostUser