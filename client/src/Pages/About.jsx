import React from 'react'

const About = () => {
  return (
    <section id="about" className="min-h-screen py-12 sm:py-16 md:py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start lg:items-center">
          <div className="flex flex-col space-y-4 sm:space-y-6 order-2 lg:order-1">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-blue-400 font-semibold">Product Developer</span> and{' '}
              <span className="text-blue-400 font-semibold">Digital Marketing Specialist</span> with a 
              strong focus on creating innovative solutions and driving business growth through technology 
              and strategic marketing.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              With expertise in product development and digital marketing, I help businesses transform 
              their ideas into successful digital products while ensuring they reach the right audience 
              through effective marketing strategies.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700 rounded-lg text-xs sm:text-sm font-semibold">
                Product Development
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700 rounded-lg text-xs sm:text-sm font-semibold">
                Digital Marketing
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700 rounded-lg text-xs sm:text-sm font-semibold">
                Web Development
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700 rounded-lg text-xs sm:text-sm font-semibold">
                Strategy
              </span>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-6 sm:p-8 shadow-xl order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-400">Skills & Expertise</h3>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div>
                <div className="flex flex-row justify-between items-center mb-2">
                  <span className="font-semibold text-sm sm:text-base">Product Development</span>
                  <span className="text-blue-400 text-sm sm:text-base">90%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-between items-center mb-2">
                  <span className="font-semibold text-sm sm:text-base">Digital Marketing</span>
                  <span className="text-blue-400 text-sm sm:text-base">85%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-between items-center mb-2">
                  <span className="font-semibold text-sm sm:text-base">Web Development</span>
                  <span className="text-blue-400 text-sm sm:text-base">80%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-between items-center mb-2">
                  <span className="font-semibold text-sm sm:text-base">Strategy & Planning</span>
                  <span className="text-blue-400 text-sm sm:text-base">88%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

