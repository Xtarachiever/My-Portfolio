import React from 'react';
import Image from 'next/image';

const Project = () => {
  return (
    <div>
        <div className='projects-wrapper'>
            <div className='sections'>
                <Image src={''} width={100} height={40} alt="project"/>
                <p>Description</p>
                <p>Link</p>
            </div>
        </div>
    </div>
  )
}

export default Project;