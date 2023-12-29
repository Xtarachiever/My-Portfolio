"use client";
import Link from 'next/link';
import React from 'react';
import './styles.css';
import { FaLaptopCode } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';

const Nav = () => {
  const pathName = usePathname();
  return (
    <div className='wrapper'>
        <div>
          <FaLaptopCode fontSize={'5rem'} className='text-orange'/>
        </div>
        <div className='flex justify-evenly w-[60%] items-center text-white'>
            <Link href="/" className={`${pathName === '/' ? 'text-orange' : ''}`}>About</Link>
            <Link href={"/projects"} className={`${pathName === '/projects' ? 'text-orange' : ''}`}>Projects</Link>
            <Link href={"/contact"} className={`${pathName === '/contact' ? 'text-orange' : ''}`}>Contact Me</Link>
        </div>
    </div>
  )
}

export default Nav;