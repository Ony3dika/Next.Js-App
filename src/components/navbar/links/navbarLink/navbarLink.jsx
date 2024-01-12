"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const NavbarLink = ({item}) => {

  const pathName = usePathname()
  return (
    <Link
      className={`lg:text-lg lg:my-0 my-5 lg:w-40 w-1/3 flex items-center justify-center text-base hover:bg-background  py-1.5 lg:h-full transition-all duration-500 ease-linear rounded-full text-copy-light ${pathName === item.path ? "bg-border text-copy" : ""}`}

      href={item.path}
    >
      {item.title}
    </Link>
  );
}

export default NavbarLink