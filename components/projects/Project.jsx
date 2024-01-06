import { FaGithub } from "react-icons/fa";
import { PiLinkBold } from "react-icons/pi";
import './styles.css';
import Link from "next/link";

const Project = ({number,name,role,client,details,stacks,github,livelink}) => {
  return (
    <div className='projects-container'>
        <div className='projects-wrapper'>
          <div className='sections'>
            <div className='inner-box'> 
              <p>Project {number}</p>
              <div className="link-div flex items-center">
                <Link href={`${github}`}><FaGithub className="hover:text-orange" fontSize={'1.5rem'}/></Link>
                <Link href={`${livelink}`}><PiLinkBold className="hover:text-orange" fontSize={'1.8rem'}/></Link>
              </div>
            </div>
          </div>
          <div className='app-details'>
            <p className='title'>{name}</p>
            <div className='participation'>
              <p>Role: <span>{role}</span></p>
              <p>Client: <span>{client}</span></p>
            </div>
          </div>
          <div className='details'>
            {details}
            <p className='stacks'>Stacks: {stacks?.map((stack)=> <span key={stack}>{stack} </span>)}</p>
          </div>
        </div>
    </div>
  )
}

export default Project;