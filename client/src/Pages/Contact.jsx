import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status message when user starts typing
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Mohiddin Sharieff',
        },
        publicKey
      )

      // Success
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen py-12 sm:py-16 md:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <div className="flex flex-col order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-400">Contact Information</h3>
            <div className="flex flex-col space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start">
                <div className="text-xl sm:text-2xl mr-3 sm:mr-4 flex-shrink-0">📧</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-400 text-sm sm:text-base break-words">fuigitiveknight@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-xl sm:text-2xl mr-3 sm:mr-4 flex-shrink-0">💼</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">LinkedIn</h4>
                  <p className="text-gray-400 text-sm sm:text-base">linkedin.com/in/mohiddin</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-xl sm:text-2xl mr-3 sm:mr-4 flex-shrink-0">🐙</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">GitHub</h4>
                  <p className="text-gray-400 text-sm sm:text-base">github.com/mohiddin</p>
                </div>
              </div>
            </div>

            <div className="mt-auto p-5 sm:p-6 bg-gray-800 rounded-lg">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out!
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 sm:p-8 shadow-xl order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:space-y-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white text-sm sm:text-base"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white resize-none text-sm sm:text-base"
                  placeholder="Your Message"
                ></textarea>
              </div>
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 sm:p-4 bg-green-600/20 border border-green-500 rounded-lg text-green-400 text-sm sm:text-base">
                  ✓ Thank you for your message! I will get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 sm:p-4 bg-red-600/20 border border-red-500 rounded-lg text-red-400 text-sm sm:text-base">
                  ✗ Something went wrong. Please try again or contact me directly via email.
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

