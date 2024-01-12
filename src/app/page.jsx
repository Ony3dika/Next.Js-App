import Image from 'next/image'

export default function Home() {
     
  return (
    <main className='h-fit md:mt-20 mt-10 md:flex '>
      <section>
        <h1 className='md:text-8xl text-center lg:text-start text-5xl font-black text-copy leading-snug'>
          Creative <br /> Thoughts <br /> Agency
        </h1>

        <p className='mt-5 lg:mt-10 text-lg text-center lg:text-start lg:text-xl text-copy-lighter'>
          {" "}
          Where Innovation Meets Impact. Elevate Your Brand with Creative Web
          Solutions.{" "}
        </p>

        <div className='flex'>
          <button className='py-3 px-5 rounded-lg font-bold mt-5 bg-primary-dark/50 text-copy'>
            Learn More
          </button>
          <button className='bg-copy py-3 px-5 rounded-lg font-bold mt-5 ml-5'>
            About
          </button>
        </div>

        <div className='grayscale mt-5 -z-10 relative  md:h-16 h-12 flex justify-center items-center lg:justify-start'>
          <Image src='/brands.png' alt='brands' width={600} height={100} />
        </div>
      </section>

      <section className='basis-1/2 flex items-center justify-center h-96 mt-5 md:mt-0 md:h-auto '>
        <Image src='/contact.png' alt='hero' height={100} width={500} />
      </section>
    </main>
  );
}
