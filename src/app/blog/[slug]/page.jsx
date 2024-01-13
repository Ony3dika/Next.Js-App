import Image from "next/image";

const SinglePostPage = () => {
  return (
    <main className='flex md:justify-start md:items-start items-center md:flex-row flex-col p-6 rounded-xl border-border border-2 bg-foreground md:mt-20 mt-10'>
      <section className='h-72 md:h-96 relative md:w-auto w-72 md:basis-2/5 lg:basis-1/3'>
        <Image alt='post-image' className='rounded-xl z-0' src='/2.jpg' fill />
      </section>

      <section className='basis-2/3 self-center md:ml-8 md:mt-0 mt-5 bg-background/50 p-4 rounded-xl'>
        <h1 className=' text-copy text-xl md:text-5xl font-semibold'>Title</h1>

        <div className='flex items-center md:mt-5 mt-3'>
          <Image
            src='/noavatar.png'
            alt='avatar'
            className=' rounded-full'
            height={32}
            width={32}
          />
          <p className='text-copy-light ml-2'>Author: Mark</p>
        </div>
        <p className='text-copy-light my-2'>Published: 01-10-2024</p>

        <p className='text-copy-lighter'>
          <span className='underline'>Description:</span> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          voluptas totam earum est distinctio asperiores voluptatem illum
          reprehenderit, doloremque dolorem dignissimos facere necessitatibus
          modi laudantium? Dolor beatae alias quod vero?
        </p>
      </section>
    </main>
  );
};

export default SinglePostPage;
