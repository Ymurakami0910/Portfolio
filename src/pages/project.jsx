import React from 'react';
// component
import ProjectCard2 from '../components/ProjectCard2';

function Projects() {
  return (
   <div className='Paper_v2 .bg_pattern'>
    <div className='container'>
    <div className='Project-content'>
    <h1>All Projects</h1>
    {/* component */}
    <ProjectCard2 />
    </div>
    </div>
   </div> 
  );
}

export default Projects;
