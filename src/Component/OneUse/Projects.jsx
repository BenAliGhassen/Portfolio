import React from 'react'
import ProjectsCard from '../Reusable/ProjectsCard'

export default function Projects() {
  return (
    <div className='container'>
      <h2 className='mb-4'>Projets</h2>
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
