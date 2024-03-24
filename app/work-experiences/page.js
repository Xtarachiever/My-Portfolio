import React from "react";

const WorkExperiences = () => {
  return (
    <div className="text-white">
      <p>Work Experiences Timeline</p>
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
      <div className="timelines">
        <div className="checkpoint">
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
        <div className="checkpoint">
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
        <div className="checkpoint">
          <div>
            <p>DevPlacement (UKTechHub)</p>
            <p>Role: Intern</p>
            <p>
              Led the development of the site as the frontend developer (intern)
              using React.js, JavaScript, CSS and HTML.
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <p>Engineering Career Expo (ECX)</p>
            <p>Role: Graphics Designers</p>
            <p>
              I joined the ECX and NSChE Graphics Team, making designs for the
              different activities.
            </p>
          </div>
        </div>
        <div className="checkpoint">
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
