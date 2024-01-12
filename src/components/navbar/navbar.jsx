"use client";
import { useState } from "react";
import Links from "./links/links";
import Link from "next/link"
import { CgMenuGridO } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const close=()=>{
    setOpen(false)
  }

  return (
    <div className='px-5 lg:py-0 lg:h-14 py-3 flex items-center md:mt-8 mt-5 rounded-lg lg:rounded-none text-copy-light'>
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
        className={`fixed lg:hidden transition-all duration-200 ease-linear top-0 h-screen w-full rounded border-2 border-border bg-foreground ${
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
