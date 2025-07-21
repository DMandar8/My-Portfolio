import React from 'react'
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import Cta from '../components/Cta';
const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "} 
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Over the years, I’ve worked on several meaningful projects — but these stand out as the ones I’m most proud of. Many are open-source, so if something catches your eye, feel free to dive into the code and contribute. I always welcome new ideas and collaborations!
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
  {projects.map((project) => (
    <div
      key={project.name}
      className="w-full lg:w-[400px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group"
    >
      {/* Full-width project image */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={project.iconUrl}
          alt={project.name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content section */}
      <div className="p-5 flex flex-col">
        <h4 className="text-2xl font-semibold font-poppins text-gray-900">
          {project.name}
        </h4>
        <p className="mt-2 text-slate-600 text-sm">{project.description}</p>

        <div className="mt-5 flex items-center gap-2 font-poppins">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:underline"
          >
            Live Link
          </a>
          <img
            src={arrow}
            alt="arrow"
            className="w-4 h-4 object-contain transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </div>
  ))}
</div>


      {/* <div className='flex flex-wrap my-20 gap-16'>
          {projects.map((project)=>(
            <div className='lg:w-[400px] w-full' key={project.name}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img src={project.iconUrl} alt="Project Icon" className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
              <div className='mt-5 flex flex-col'>
                  <h4 className='text-2xl font-poppins font-semibold'>
                    {project.name}
                  </h4>
                  <p className='mt-2 text-slate-500'>
                    {project.description}
                  </p>
                  <div className='mt-5 flex items-center gap-2 font-poppins'>
                    <Link to={project.link} target='_blank' rel='noopener noreferrer' className='font-semibold text-blue-600 '>
                        Live Link
                    </Link>
                    <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                  </div>
              </div>
            </div>
          ))}
      </div> */}
      <hr className='border-slate-200' />
      <Cta/>
    </section>
  )
}

export default Projects;