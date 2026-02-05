import React from 'react'
import { motion } from 'framer-motion'
import ContactInfoWidget from '../components/widgets/ContactInfoWidget'
import ResponseTimeWidget from '../components/widgets/ResponseTimeWidget'

const Contact = () => {
  
  return (
    <section className="contact">
    <div className="flex flex-col items-center">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          <span className="text-gray-300">Get In </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
            Touch
          </span>
        </h1>
        <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Let's discuss opportunities, collaborations, or how we can build something amazing together.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="w-full max-w-6xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Widgets */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ContactInfoWidget />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <ResponseTimeWidget />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
    </section>
  )
}

export default Contact