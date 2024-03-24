"use client";
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from "react-icons/fa";
import { BsArrowRight } from 'react-icons/bs';
import {gsap, Power3 } from 'gsap';
import { useIntersection } from 'react-use';

const Home = () => {
  const homeSectionRef = useRef(null);
  const introSectionRef = useRef(null);

  const intersection = useIntersection(homeSectionRef,{
    root:null,
    rootMargin:"0px",
    threshold: 0.5
  });

  const intersection1 = useIntersection(introSectionRef,{
    root:null,
    rootMargin:"0px",
    threshold: 0.5
  });

  
  const fadeIn = element=>{
    gsap.from(element,1,{
      opacity:0,
      y:-40,
      ease:Power3.easeOut,
      stagger:{
        amount:0.3
      }
    })
    gsap.to(element,1,{
      opacity:1,
      y:0,
      ease:Power3.easeOut,
      stagger:{
        amount:0.3
      }
    })
  }

  const slideIn = element=>{
    gsap.from(element,1,{
      opacity:0,
      x:-80,
      ease:Power3.easeOut,
      stagger:{
        amount:0.3
      }
    })
    gsap.to(element,1,{
      opacity:1,
      x:0,
      ease:Power3.easeOut,
      stagger:{
        amount:0.3
      }
    })
  }

  intersection && fadeIn('.image-section') 
  intersection1 && slideIn('.intro-section')
  return (
    <div className='bg-navyBlue relative text-white'>
      <div className='image-wrapper absolute top-[70px] left-[100px] sm:-top-[100px] sm:left-[0px]'>
        <Image src="/assets/Esther.png" alt='Picture' width={400} height={300}/>
      </div>
      <div className='main-div'>
        <div className='image-section' ref={homeSectionRef}>
          <p className='name'>
            ADEYEMI, <br /> <span className=''>ESTHER OLAYINKA.</span>
          </p>
          <span className='designed-line'></span>
          <div className='icons'>
            <Link href={'https://github.com/Xtarachiever'}><FaGithub fontSize={'1.8rem'} /></Link>
            <Link href={'https://twitter.com/Xtarachiever'}><AiFillTwitterCircle fontSize={'1.8rem'} /></Link>
            <Link href={'https://www.linkedin.com/in/estheradeyemi/'}><AiFillLinkedin fontSize={'1.8rem'} /></Link>
          </div>
        </div>
        <div className='intro-section' ref={introSectionRef}>
          <p className='intro'><span>Introduction</span></p>
          <p className='pt-3 pb-6 text-md sm:text-2xl md:text-3xl'>Web Developer, <br />Based in Lagos, Nigeria</p>
          <p className='pb-5 leading-8'>I am Esther Adeyemi, a Chemical Engineering graduate from the
          University of Lagos with a passion for front-end development. With
          over four years of experience, I specialize in building engaging user
          interfaces using technologies such as React.js, Next.js, and
          TypeScript. I am proficient in database management with MongoDB and
          adept at utilizing CSS frameworks like Bootstrap and Tailwind CSS to
          create visually appealing designs. 
          </p>
            <p className='items-center my_story'>
                <Link href={'/work-experiences'}>
                  <span className='pr-5 inline'>My Story</span>
                </Link>
                <BsArrowRight fontSize={'1.4rem'} className='inline'/>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Home;