"use client";
import { useIntersection } from "react-use";
import {gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

const WorkExperiences = () => {
  const experienceSectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const intersection = useIntersection(experienceSectionRef,{
    root:null,
    rootMargin:"0px",
    threshold: 0.5
  });

  const fadeIn = element=>{
    gsap.from(element,1,{
      opacity:0,
      y:-100,
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

  var tl = gsap.timeline({
    // scrollTrigger:{
    //     trigger:'.checkpoint',
    //     markers:false,
    //     start:0,
    //     scrub:1,
        
    // }
  });
    tl.from(".checkpoint-odd", {translateX:'50vw', duration: 1,opacity:0});
    tl.to(".checkpoint-odd", { duration: 1, translateX:'16.8em',opacity:1});

    tl.from(".checkpoint-even", {translateX:'50vw', duration: 1,opacity:0});
    tl.to(".checkpoint-even", { duration: 1, translateX:'0em',opacity:1});

  intersection && fadeIn('.introduction-div')
  return (
    <div className="text-white">
        <div className="introduction-div" ref={experienceSectionRef}>
            <p className="lg:text-xl">Work Experiences Timeline</p>
            <div className="leading-8">
            <br />
            In addition to my development
            skills, I am also a skilled graphics designer, capable of creating
            captivating visuals to complement my web projects. Throughout my
            career, I have gained valuable experience through internships and
            roles as a software developer for various startups and companies. I am
            committed to delivering high-quality solutions that exceed
            expectations and drive user engagement. Some of these startups are listed below:
            </div>
        </div>
      <div className="timelines">
        <div className="checkpoint checkpoint-odd">
          <div>
            <p>Royal grocery shoppa</p>
            <p className="text-[#ffd000] font-500">Role: Software Developer</p>
            <p>
              I played a key role in enhancing the backend API, which operates
              on Node.js and MongoDB, by implementing various improvements.
              Additionally, I contributed to the overall management and
              operation of the startup, ensuring its seamless functioning. These
              efforts resulted in the website operating smoothly and attracting
              a larger customer base without encountering any obstacles.
            </p>
          </div>
        </div>
        <div className="checkpoint checkpoint-even">
          <div>
            <p>Hotels.ng (HNGi8)</p>
            <p>Role: Intern</p>
            <p>
              Participated in the hotels.ng 8 training and became a finalist. I
              Played a pivotal role in spearheading the creation and
              implementation of the channels plugin for the Zuri website.
            </p>
          </div>
        </div>
        <div className="checkpoint checkpoint-odd">
          <div>
            <p>DevPlacement (UKTechHub)</p>
            <p>Role: Intern</p>
            <p>
              Led the development of the site as the frontend developer (intern)
              using React.js, JavaScript, CSS and HTML.
            </p>
          </div>
        </div>
        <div className="checkpoint checkpoint-even">
          <div>
            <p>Engineering Career Expo (ECX)</p>
            <p>Role: Graphics Designers</p>
            <p>
              I joined the ECX and NSChE Graphics Team, making designs for the
              different activities.
            </p>
          </div>
        </div>
        <div className="checkpoint checkpoint-odd">
          <div>
            <p>Carettop</p>
            <p>Role: Wordpress Developer</p>
            <p>
              I a full blown website using wordpress and plugins like
              layerslider, WP gallery and more, which added a smooth running
              website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;
