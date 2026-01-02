import React from 'react'

const Projects = () => {
  const projects = []

  return (
    <section id="projects" className="min-h-screen py-12 sm:py-16 md:py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            A showcase of my recent work and projects
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-gray-600 p-8 sm:p-10 md:p-12 text-center text-5xl sm:text-6xl flex items-center justify-center min-h-[200px] sm:min-h-[250px]">
                  {project.image}
                </div>
                <div className="flex flex-col p-5 sm:p-6 flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-blue-600 rounded-full text-xs sm:text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors text-sm sm:text-base self-start">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-12 sm:py-16">
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🚀</div>
            <p className="text-lg sm:text-xl text-gray-400 mb-2 sm:mb-4">Projects coming soon!</p>
            <p className="text-sm sm:text-base text-gray-500">Check back later to see my latest work.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects

