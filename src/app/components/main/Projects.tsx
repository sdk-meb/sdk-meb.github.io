import React from 'react'
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div 
        id='projects'
        className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 '>
            My Projects    
        </h1>    
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard
                src='/CardImage.png'
                title='FT_TRANSCENDENCE'
                description='Transcendence is an all-in-one, dynamic web project that offers a seamless user experience. With its onepage fullstack design, users can enjoy engaging in real-time multiplayer Ping Pong games, along with a range of additional features.'
            />
            <ProjectCard
                src='/SpaceWebsite.png'
                title='modern'
                description='description'
            />
            <ProjectCard
                src='/NextWebsite.png'
                title='modern'
                description='description'
            />
        </div>

    </div>
  )
}

export default Projects;