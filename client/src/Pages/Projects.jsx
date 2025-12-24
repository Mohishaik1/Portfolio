import React from 'react'

const Projects = () => {
  const projects = []

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and projects
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-gray-600 p-12 text-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🚀</div>
            <p className="text-xl text-gray-400 mb-4">Projects coming soon!</p>
            <p className="text-gray-500">Check back later to see my latest work.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects

