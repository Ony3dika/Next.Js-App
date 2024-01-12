import React from 'react'

const Footer = () => {
  return (
    <main className='flex justify-between mt-5 items-center h-16'>
      <div>
        <h1 className='font-bold text-copy-light'>CodeVista</h1>
      </div>

      <div>
        <p className='text-copy-light md:text-base text-xs'>
          CodeVista <span className='md:inline hidden'>Creative Agency</span> © All Rights Reserved.
        </p>
      </div>
    </main>
  );
}

export default Footer