import React from 'react'
import ProjectItem from './ProjectItem'
import project_1 from '../assets/img/project_1.jpg'
import project_2 from '../assets/img/project_2.jpg'
import project_3 from '../assets/img/project_3.jpg'
import project_4 from '../assets/img/project_4.jpg'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Nullam non nisi est sit amet facilisis magna. 
        Feugiat nisl pretium fusce id velit ut tortor pretium viverra. 
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={project_1} title='Altee App'/>
        <ProjectItem img={project_2} title='Altee App'/>
        <ProjectItem img={project_3} title='Altee App'/>
        <ProjectItem img={project_4} title='Altee App'/>
      </div>
    </div>
  )
}

export default Projects