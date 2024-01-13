"use client";
import { useState,useEffect } from "react";
import Links from "./links/links";
import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

   const [isScrolled, setIsScrolled] = useState(false);

   const handleScroll = () => {
     const scrollPosition = window.scrollY;
     // Adjust the scroll threshold as needed
     setIsScrolled(scrollPosition > 100);
   };

   useEffect(() => {
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

  return (
    <div
      className={`px-5 lg:h-14 sticky md:top-8 top-5 transition-all duration-500 ease-linear flex items-center  text-copy-light ${
        isScrolled
          ? "bg-background py-3 rounded-lg lg:rounded-full"
          : "py-3 lg:py-0 lg:rounded-none"
      }`}
    >
      <div className='basis-1/5'>
        <Link href='/' className='font-black text-md lg:text-2xl'>
          CodeVista
        </Link>
      </div>
      <div className='basis-1/5 lg:hidden'></div>
      <div className='basis-3/5 hidden h-full rounded-full bg-foreground/70 lg:flex items-center'>
        <Links />
      </div>

      {/* Mobile Menu */}
      <div className='lg:hidden flex basis-1/2 justify-end'>
        <CgMenuGridO onClick={() => setOpen(true)} size={"1.5rem"} />
      </div>

      <section
        className={`fixed lg:hidden transition-all duration-200 ease-linear top-0 h-screen w-full rounded border-2 border-border bg-foreground mobilePattern ${
          open ? "right-0" : "right-[-100%]"
        }`}
      >
        <section className='flex pt-10 px-10'>
          <div className='basis-1/2'>
            <h1 className=' font-black text-xl'>CodeVista</h1>
          </div>

          <div className='basis-1/2 flex justify-end'>
            <IoCloseOutline onClick={() => setOpen(false)} size={"2rem"} />
          </div>
        </section>
        <Links />
      </section>
    </div>
  );
};

export default Navbar;
