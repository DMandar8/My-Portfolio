import React, { useState } from 'react'
import { projects } from '../constants';
// import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import Cta from '../components/Cta';
import { timeSepScreenshots } from '../constants/index.js';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);



  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

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
          Over the years, I've worked on several meaningful projects — but these stand out as the ones I'm most proud of. Many are open-source, so if something catches your eye, feel free to dive into the code and contribute. I always welcome new ideas and collaborations!
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
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-95"
              />
            </div>

            {/* Content section */}
            <div className="p-5 flex flex-col">
              <h4 className="text-2xl font-semibold font-poppins text-gray-900">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-600 text-sm">{project.description}</p>
              
              {/* Technology Stack Section */}
              <div className="flex flex-wrap mt-3 gap-2">
                {project.techs.map((tech, index) => (
                  <div
                    key={index}
                    className="w-9 h-9 bg-gray-100 rounded-md shadow-sm flex items-center justify-center"
                    title="Tech Used"
                  >
                    <img
                      src={tech}
                      alt={`tech-${index}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 flex g-4 items-center font-poppins">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  {project.btnText}
                </a>
                {!project.name.includes('TimeSep') && (
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
                )}
                </div>
                {/* Show Images button only for TimeSep project */}
                {project.name.includes('TimeSep') && (
                  <button
                    onClick={() => openModal(project)}
                    className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
                  >
                    See Preview
                    <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
                  </button>
                  
                )}
              
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />
      <Cta/>

      {/* Modal Popup */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {selectedProject.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Screenshots and feature previews
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body - Screenshots Grid */}
            <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 80px)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                {timeSepScreenshots.map((screenshot) => (
                  <div
                    key={screenshot.id}
                    className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    {/* Screenshot Image */}
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={screenshot.src}
                        alt={screenshot.title}
                        className="w-full h-full object-cover hover:scale-95 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Screenshot Caption */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {screenshot.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4">
              <p className="text-sm text-gray-500 text-center">
                {timeSepScreenshots.length} screenshots showing key features of the TimeSep Systems CRM
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects;