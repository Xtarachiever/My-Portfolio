"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import './styles.css';
import { FaLaptopCode } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from 'next/navigation';
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [active, setActive] = useState(false);
  const pathName = usePathname();
  return (
    <div className='wrapper'>
        <div>
          <Link href={'/'}>
            <FaLaptopCode fontSize={'4rem'} className='text-orange'/>
          </Link>
        </div>
        {/* Desktop view */}
        <div className='hidden sm:flex justify-evenly w-[60%] items-center text-white'>
            <Link href="/" className={`${pathName === '/' ? 'text-orange' : ''}`}>About</Link>
            <Link href={"/projects"} className={`${pathName === '/projects' ? 'text-orange' : ''}`}>Projects</Link>
            <Link href={"/contact"} className={`${pathName === '/contact' ? 'text-orange' : ''}`}>Contact Me</Link>
        </div>
        {/* Mobile view */}
        <div className='relative sm:hidden block cursor-pointer'>
          {
            !active ?
            <GiHamburgerMenu fontSize={'2rem'} className='text-orange' onClick={()=>setActive(true)}/> 
            :
            <div className='mobile-view'>
              <IoMdClose className='absolute top-2 right-4' onClick={()=>setActive(false)}/> 
              <Link href="/" className={`${pathName === '/' ? 'text-orange' : ''}`}>About</Link>
              <Link href={"/projects"} className={`${pathName === '/projects' ? 'text-orange' : ''}`}>Projects</Link>
              <Link href={"/contact"} className={`${pathName === '/contact' ? 'text-orange' : ''}`}>Contact Me</Link>
            </div>
          }
        </div>
    </div>
  )
}

export default Nav;