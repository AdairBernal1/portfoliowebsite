"use client"

import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div
    id='projects'
    className='flex flex-col items-center justify-center py-20'
    >
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            Some of my projects
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-10'>
            <ProjectCard
            src='/ai-expression.jpg'
            title='Facial Expression Analysis and Emotional Evaluation Software'
            description='This is a work-in-progress project in collaboration with the Autonomous University of Sinaloa and others. It is based in Python and Deepface'
            url="https://github.com/AdairBernal1/SIIEE-Backend"
            />
            <ProjectCard
            src='/school-software.jpg'
            title='Administrative Website for Schools'
            description='Software made in Angular using Hasura for the backend of the project, along with Auth0 for user authentication and management.'
            url="https://github.com/AdairBernal1/Hasura-Angular-schoolApp"
            />
            <ProjectCard
            src='/arduinobot.jpg'
            title='Arduino-Python-Prolog Security System for Houses'
            description='AI-assissted security system for house security and privacy, this software sends alerts based on multi-factorial decision made by the intelligent Prolog algorithm.'
            url="https://github.com/AdairBernal1/House-Security-Bot"
            />
        </div>
    </div>
  )
}

export default Projects