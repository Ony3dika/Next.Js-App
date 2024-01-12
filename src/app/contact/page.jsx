import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <main className='h-fit md:mt-20 mt-10 md:flex '>
      <section className='basis-1/2 flex items-center justify-center h-96 mt-5 md:mt-0 md:h-auto '>
        <Image src='/contact.png' alt='hero' height={100} width={500} />
      </section>

      <section className='basis-1/2'>
        <h1 className='md:text-3xl text-xl font-black text-primary-light'>
          Contact Form
        </h1>
        <form action=''>
          <input
            type='text'
            className='w-full my-2 py-3 px-4 rounded bg-foreground/70 outline-none text-copy-light border-border border-[1px]'
            placeholder='FirstName & LastName'
          />

          <input
            type='email'
            className='w-full my-2 py-3 px-4 rounded bg-foreground/70 outline-none text-copy-light border-border border-[1px]'
            placeholder='Email Address'
          />

          <input
            type='text'
            className='w-full my-2 py-3 px-4 rounded bg-foreground/70 outline-none text-copy-light border-border border-[1px]'
            placeholder='Phone Number'
          />

          <textarea
            className='w-full my-2 py-3 px-4 rounded bg-foreground/70 outline-none text-copy-light border-border border-[1px] resize-none'
            placeholder='Message'
            rows='7'
          ></textarea>

          <button className='w-full mt-3 py-3 px-4 rounded bg-primary-dark text-copy-light font-black text-lg '>
            Send
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
