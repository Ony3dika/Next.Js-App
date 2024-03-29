import Image from 'next/image'

export default function Home() {
     
  return (
    <main className='h-fit md:mt-20 mt-10 md:flex '>
      <section>
        <h1 className='md:text-8xl text-center md:text-start text-5xl font-black text-copy leading-snug'>
          Creative <br /> Thoughts <br /> Agency
        </h1>

        <p className='mt-5 lg:mt-10 text-lg text-center md:text-start lg:text-xl text-copy-lighter'>
          {" "}
          Where Innovation Meets Impact. Elevate Your Brand with Creative Web
          Solutions.{" "}
        </p>

        <div className='flex items-center md:justify-start justify-center'>
          <button className='py-3 px-5 rounded-lg font-bold mt-5 bg-primary-dark/50 text-copy'>
            Learn More
          </button>
          <button className='bg-copy py-3 px-5 rounded-lg font-bold mt-5 ml-5'>
            About
          </button>
        </div>

        <div className='grayscale-[5%] mt-5 -z-10 relative  md:h-16 h-12 flex justify-center items-center lg:justify-start'>
          <Image src='/brands.png' alt='brands' width={600} height={100} />
        </div>
      </section>

      <section className='basis-1/2 flex items-center justify-center h-96 md:h-auto'>
        <Image src='/create.png' alt='hero' height={500} width={1000} />
      </section>
    </main>
  );
}
