import React from 'react'
import ProjectsCard from '../Reusable/ProjectsCard'

export default function Projects() {
  return (
    <div>Projects
        <div className='container d-flex flex-row flex-wrap'>
        <ProjectsCard/>
        <ProjectsCard/>
        <ProjectsCard/>
        <ProjectsCard/>
        <ProjectsCard/>
        <ProjectsCard/>
        </div>
        
    </div>
  )
}
