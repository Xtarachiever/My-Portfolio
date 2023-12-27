import Link from 'next/link';
import React from 'react';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import './styles.css';
import { FaLaptopCode } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className='wrapper'>
        <div>
          <FaLaptopCode fontSize={'5rem'} className='text-orange'/>
        </div>
        <div className='flex justify-evenly w-[60%] items-center text-white'>
            <Link href="/">About</Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/"}>Contact</Link>
        </div>
    </div>
  )
}

export default Nav;