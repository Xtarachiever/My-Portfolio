import Project from "@/components/projects/Project";
import React from "react";

const Projects = () => {
  return (
    <div className="text-white">
      <p className="text-[30px]">My Works</p>
      <div className="all-projects-container">
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
          livelink={'https://lendsqr-zeta.vercel.app/'}
          details={
            "I participated in the lendersqr frontend assestment test and built this site following the design template provided. This site shows the dashboard of a lender's company admin, which gives details on the users, loans taken and more."
          }
          stacks={['ReactJS', 'Typescript', 'Tailwindcss','Jest testing library']}
        />
        <Project
          number={"#3"}
          name={"GetLinked"}
          role={"Developer"}
          client={"Hackathon"}
          github={'https://github.com/Xtarachiever/getlinked_'}
          livelink={'getlinked-hackathon-git-xtarachiever-xtarachiever.vercel.app/'}
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
      </div>
    </div>
  );
};

export default Projects;
