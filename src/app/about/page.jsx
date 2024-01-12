import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className='h-fit md:mt-20 mt-10 md:flex '>
      <section className='basis-1/2'>
        <h1 className='md:text-3xl text-xl font-black text-primary-light'>
          About Agency
        </h1>

        <p className='mt-5 md:mt-10 md:text-5xl text-3xl font-black text-copy'>
          We create digital ideas <br /> that are bigger, bolder, <br /> braver
          and better.
        </p>

        <p className='mt-5 md:mt-10 text-copy-lighter md:text-xl text-md'>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precision. Our team are the
          world&apos;s best in finance and consulting. Wide range of web and
          software development services.
        </p>

        <div className='flex justify-between mt-5 md:mt-10'>
          <div>
            <h1 className='md:text-3xl text-xl font-black text-primary-light '>
              10+
            </h1>
            <p className='text-copy-lighter md:text-lg text-xs'>
              Year of experience
            </p>
          </div>

          <div>
            <h1 className='md:text-3xl text-xl font-black text-primary-light '>
              234 K+
            </h1>
            <p className='text-copy-lighter md:text-lg text-xs'>
              People reached
            </p>
          </div>

          <div>
            <h1 className='md:text-3xl text-xl font-black text-primary-light '>
              5 K+
            </h1>
            <p className='text-copy-lighter md:text-lg text-xs'>
              Services and Plugins
            </p>
          </div>
        </div>

        lorem500
      </section>

      <section className='basis-1/2 flex items-center justify-center h-96 mt-5 md:mt-0 md:h-auto '>
        <Image src='/about.png' alt='hero' height={100} width={500} />
      </section>
    </main>
  );
};

export default About;
