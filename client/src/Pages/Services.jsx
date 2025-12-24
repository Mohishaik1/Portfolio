import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Product Development',
      description: 'End-to-end product development from ideation to launch, ensuring scalable and user-friendly solutions.',
      icon: '🚀',
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including SEO, social media, content marketing, and analytics.',
      icon: '📈',
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      icon: '💻',
    },
    {
      title: 'Strategy & Consulting',
      description: 'Strategic planning and consulting to help businesses achieve their digital transformation goals.',
      icon: '🎯',
    },
  ]

  return (
    <section id="services" className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I offer a range of services to help bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

