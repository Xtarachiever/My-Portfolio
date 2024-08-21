"use client";
import { useRef } from "react";
import Project from "@/components/projects/Project";
import { useIntersection } from "react-use";
import gsap, { Power3} from "gsap";

const Projects = () => {
  const projectSectionRef = useRef(null);

  const intersection = useIntersection(projectSectionRef,{
    root:null,
    rootMargin:"0px",
    threshold: 0.5
  });

  const fadeIn = element=>{
    gsap.from(element,.5,{
      opacity:0,
      x:40,
      ease:Power3.easeOut,
      stagger:{
        amount:0.3
      }
    })
    gsap.to(element,.5,{
      opacity:1,
      x:0,
      ease:Power3.easeOut,
      stagger:{
        amount:0.3
      }
    })
  }

  // const fadeOut = element=>{
  //   gsap.to(element,1,{
  //     opacity:0,
  //     y:-60,
  //     ease:'power4.out',
  //     stagger:{
  //       amount:0.3
  //     }
  //   })
  // }

  intersection && intersection.intersectionRatio < 0.5 && fadeIn('.all-projects-container')
  return (
    <div className="text-white">
      <p className="text-[30px]">My Works</p>
      <div className="all-projects-container" ref={projectSectionRef}>
        <Project
          number={"#1"}
          name={"To do list"}
          role={"Developer"}
          client={"Personal Use"}
          github={'https://github.com/Xtarachiever/To-do-list'}
          livelink={'https://xtarachiever.github.io/To-do-list'}
          details={
            "I completed the website Todo list website. This site is for listing the various activities that needs to be tracked. It helps to know the tasks that have been completed and those still in progress"
          }
          stacks={['HTML', 'CSS', 'Javascript']}
        />
        <Project
          number={"#2"}
          name={"Lendersqr-fe-test"}
          role={"Developer"}
          client={"Internship application test"}
          github={'https://github.com/Xtarachiever/lendsqr-fe-test'}
          livelink={'https://esther-adeyemi-lendsqr-fe-test.netlify.app/login'}
          details={
            "I participated in the lendersqr frontend assestment test and built this site following the design template provided. This site shows the dashboard of a lender's company admin, which gives details on the users, loans taken and more."
          }
          stacks={['ReactJS', 'Typescript', 'Vite', 'Tailwindcss','Jest testing library']}
        />
        <Project
          number={"#3"}
          name={"GetLinked"}
          role={"Developer"}
          client={"Hackathon"}
          github={'https://github.com/Xtarachiever/getlinked_'}
          livelink={'https://getlinked-hackathon-git-xtarachiever-xtarachiever.vercel.app/'}
          details={
            "I participated in the getlinked hackathon. Getlinked is all about solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
          }
          stacks={['NextJS', 'Tailwindcss','Framer-motion']}
        />
        <Project
          number={"#4"}
          name={"A SPA portfolio"}
          role={"Developer"}
          client={"Personal Use"}
          details={
            "I worked on a single page portfolio that summarizes my skills, works done and shows my various contact platforms."
          }
          stacks={['HTML', 'CSS', 'JS']}
          livelink={'https://xtarachiever.github.io/Portfolio/'}
          github={'https://github.com/Xtarachiever/Portfolio'}
        />
        <Project
          number={"#5"}
          name={"Sachomes"}
          role={"Intern"}
          client={"Small startup"}
          details={
            "I contributed to the development of this sites as an intern. Sachomes offers Safe, Affordable and Convenient homes for rent to our users. The sites displays various homes and destination that aids easy and convenient access for users."
          }
          stacks={['ReactJS', 'Tailwindcss']}
          livelink={'https://sachomes.netlify.app/'}
          github={'https://github.com/Xtarachiever/sachomes'}
        />
        <Project
          number={"#6"}
          name={"Promptopia"}
          role={"Developer"}
          client={"Youtube Replicate"}
          details={
            "I replicated the site for a Youtube tutorial. Promptopia helps users to send prompts that can be useful for other users when using chatgpt. It helps give idea on the right prompt to send to chatgpt or other related sites."
          }
          stacks={['NextJS', 'Tailwindcss', 'MongoDB']}
          livelink={'https://promptopia-clone-henna.vercel.app/'}
          github={'https://github.com/Xtarachiever/promptopia_clone'}
        />
        <Project
          number={"#7"}
          name={"Simple Calculator"}
          role={"Developer"}
          client={"Personal use"}
          details={
            "I developed a simple calculator as a part of a personal project"
          }
          stacks={['ReactJS', 'CSS']}
          livelink={'simple-calculator-site.netlify.app/'}
          github={'https://github.com/Xtarachiever/Calculator'}
        />
        <Project
          number={"#8"}
          name={"Easy bank page"}
          role={"Developer"}
          client={"Internship Task"}
          details={
            "I took the frontend mentor challenge and built the easy bank page during the JSMinna internship. Easybank app helps to Control your finances like never before."
          }
          stacks={['HTML', 'CSS', 'JS']}
          livelink={'https://xtarachiever.github.io/JSMINNA/Task9/html_pages/index.html'}
          github={'https://github.com/Xtarachiever/JSMINNA'}
        />
        <Project
          number={"#9"}
          name={"Muse Mingle"}
          role={"Developer"}
          client={"Personal Project"}
          details={
            "I took on a personal project to make a blog website. This website has features of add a blog, updating a blog, saving a draft as a writer. You can also access the number of views for a particular blog."
          }
          stacks={['Nextjs', 'Tailwindss', 'MongoDB']}
          livelink={'https://ebloggers.netlify.app'}
          github={'https://github.com/Xtarachiever/blog-site'}
        />
      </div>
    </div>
  );
};

export default Projects;
