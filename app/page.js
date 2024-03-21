import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { AiFillTwitterCircle, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

const Home = () => {
  return (
    <div className='bg-navyBlue relative text-white'>
      <div className='image-wrapper absolute top-[70px] left-[100px] sm:-top-[100px] sm:left-[0px]'>
        <Image src="/assets/Esther.png" alt='Picture' width={400} height={300}/>
      </div>
      <div className='main-div'>
        <div>
          <p className='name'>
            ADEYEMI, <br /> <span className=''>ESTHER OLAYINKA.</span>
          </p>
          <span className='designed-line'></span>
          <div className='icons'>
            <Link href={'https://twitter.com/Xtarachiever'}><AiFillTwitterCircle fontSize={'1.8rem'} /></Link>
            <Link href={'https://www.instagram.com/essy_3'}><AiOutlineInstagram fontSize={'1.8rem'} /></Link>
            <Link href={'https://www.linkedin.com/in/estheradeyemi/'}><AiFillLinkedin fontSize={'1.8rem'} /></Link>
          </div>
        </div>
        <div className='intro-section'>
          <p className='intro'><span>Introduction</span></p>
          <p className='pt-3 pb-6 text-md sm:text-2xl md:text-3xl'>Web Developer, Based in Lagos, Nigeria</p>
          <p className='pb-5'>I am a very dedicated and hard working person. 
            I am also a great team worker and always do my best to get better at what I do.
          </p>
          <Link href={'/'}>
            <span className='items-center my_story'>
                <span className='pr-5 inline'>My Story</span>
                <BsArrowRight fontSize={'1.4rem'} className='inline'/>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;