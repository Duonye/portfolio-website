import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Award, Users, Zap, BookOpen } from 'lucide-react'
import EducationWidget from '../components/widgets/EducationWidget'
import ExperienceWidget from '../components/widgets/ExperienceWidget'
import SkillsWidget from '../components/widgets/SkillsWidget'

const About = () => {
  const principles = [
    { icon: <Code2 size={20} />, title: 'Clean Code', desc: 'Maintainable, testable, and scalable solutions' },
    { icon: <Zap size={20} />, title: 'Performance', desc: 'Optimized applications and efficient algorithms' },
    { icon: <Users size={20} />, title: 'Collaboration', desc: 'Agile teamwork and clear communication' },
    { icon: <BookOpen size={20} />, title: 'Continuous Learning', desc: 'Always exploring new technologies' },
  ]

  return (
    <div className="flex flex-col items-center">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          <span className="text-gray-300">About</span>
        </h1>
        <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Full Stack Developer specializing in enterprise applications, cloud technologies, 
          and building scalable solutions that solve real-world problems.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="w-full max-w-6xl mb-20">
        {/* Quick Intro Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                <Award className="text-white" size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Professional Summary</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">
                  Self-motivated Full Stack Developer proficient in 
                  <span className="text-cyan-400 font-medium"> .NET Core C#</span>, 
                  <span className="text-cyan-400 font-medium"> Angular</span>, and 
                  <span className="text-cyan-400 font-medium"> enterprise application development</span>.
                </p>
                <p className="text-gray-300">
                  Experienced in building scalable web applications using modern frameworks 
                  and cloud platforms with a focus on clean architecture and best practices.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Proven ability to design, develop, and deploy full-stack solutions with 
                  <span className="text-cyan-400"> RESTful APIs</span>, 
                  <span className="text-cyan-400"> SQL/NoSQL databases</span>, and 
                  <span className="text-cyan-400"> CI/CD pipelines</span>.
                </p>
                <p className="text-gray-300">
                  Collaborative team player with Agile/Scrum experience, strong problem-solving 
                  skills, and a passion for writing clean, testable code.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Widgets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <EducationWidget />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <ExperienceWidget />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <SkillsWidget />
          </motion.div>
        </div>

        {/* Development Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-gray-300">Development Principles</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-500/30 transition-all group text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {principle.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-gray-400">{principle.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About