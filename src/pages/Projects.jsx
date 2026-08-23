import React, { useState } from 'react'
import { projects } from '../constants';
import { arrow } from '../assets/icons';
import Cta from '../components/Cta';
import { timeSepScreenshots, docminrScreenshots } from '../constants/index.js';

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

  // Helper function to get the right screenshots based on project name
  const getScreenshotsForProject = (projectName) => {
    if (projectName.includes('TimeSep')) {
      return timeSepScreenshots;
    } else if (projectName.includes('DocMinr')) {
      return docminrScreenshots;
    }
    return [];
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
            className="w-full lg:w-[400px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group relative"
          >
            {/* Open Source Badge - Only for DocMinr */}
            {project.name.includes('DocMinr') && (
              <div className="absolute top-3 right-3 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Open Source
              </div>
            )}

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

              <div className="mt-5 flex flex-wrap items-center gap-3 font-poppins">
                {/* Regular project link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
                >
                  {project.btnText}
                  {!project.name.includes('TimeSep') && !project.name.includes('DocMinr') && (
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                  )}
                </a>

                {/* GitHub Button - Only for DocMinr */}
                {project.name.includes('DocMinr') && (
                  <a
                    href="https://github.com/DMandar8/DocMinr.ai" // Replace with your actual GitHub link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View on GitHub
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                )}

                {/* See Preview buttons */}
                {project.name.includes('TimeSep') && (
                  <button
                    onClick={() => openModal(project)}
                    className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
                  >
                    See Preview
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                  </button>
                )}
                {project.name.includes('DocMinr') && (
                  <button
                    onClick={() => openModal(project)}
                    className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
                  >
                    See Preview
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                  </button>
                )}
              </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                {getScreenshotsForProject(selectedProject.name).map((screenshot) => (
                  <div
                    key={screenshot.id}
                    className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow "
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

            {/* Modal Footer - Customized for DocMinr */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                <p className="text-sm text-gray-500 text-center sm:text-left">
                  {getScreenshotsForProject(selectedProject.name).length} screenshots showing key features of the {selectedProject.name} project
                </p>
                
                {/* GitHub link in modal footer - Only for DocMinr */}
                {selectedProject.name.includes('DocMinr') && (
                  <a
                    href="https://github.com/DMandar8/DocMinr.ai" // Replace with your actual GitHub link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    ⭐ Star on GitHub
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects;