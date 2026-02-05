import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Github, Code, Users, Calendar, Star, GitBranch, Eye, Server  } from 'lucide-react'
import { projects as sampleProjects } from '../data/projects'
import ProjectFilterWidget from '../components/widgets/ProjectFilterWidget'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTech, setSelectedTech] = useState<string>('')

  const techStacks = ['Angular', 'React', 'Vue.js', '.NET Core', 'Spring Boot', 'Node.js', 'MongoDB', 'AWS', 'Azure', 'Docker']

  // Use useMemo for derived state
  const filteredProjects = useMemo(() => {
    let filtered = sampleProjects

    if (filter !== 'all') {
      filtered = filtered.filter(project => project.category === filter)
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (selectedTech) {
      filtered = filtered.filter(project =>
        project.technologies.some(tech => tech.toLowerCase().includes(selectedTech.toLowerCase()))
      )
    }

    return filtered
  }, [filter, searchTerm, selectedTech])

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      'Angular': 'bg-red-500/20 text-red-400 border-red-500/30',
      'React': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'Vue.js': 'bg-green-500/20 text-green-400 border-green-500/30',
      '.NET Core': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Spring Boot': 'bg-green-600/20 text-green-300 border-green-600/30',
      'Node.js': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      'MongoDB': 'bg-green-700/20 text-green-300 border-green-700/30',
      'AWS': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Azure': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Docker': 'bg-blue-600/20 text-blue-300 border-blue-600/30',
    }
    return colors[tech] || 'bg-gray-800 text-gray-300 border-gray-700'
  }

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
          <span className="text-gray-300">My Projects</span>
        </h1>
        <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          A curated collection of full-stack applications, collaborative work, 
          and technical demonstrations showcasing my development capabilities.
        </p>
      </motion.div>

      {/* Widgets Row */}
      <div className="w-full max-w-6xl mb-12">
        <ProjectFilterWidget 
          filter={filter}
          setFilter={setFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
          techStacks={techStacks}
        />
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl mb-20">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center">
              <Code size={40} className="text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3">No projects found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your filters or search term
            </p>
            <button
              onClick={() => {
                setFilter('all')
                setSearchTerm('')
                setSelectedTech('')
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all"
            >
              Clear All Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group"
              >
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <div className="p-1 rounded bg-gradient-to-r from-yellow-500 to-orange-500">
                          <Star size={12} className="text-white" />
                        </div>
                      )}
                      {project.collaborators && (
                        <div className="p-1 rounded bg-gradient-to-r from-blue-500 to-cyan-500">
                          <Users size={12} className="text-white" />
                        </div>
                      )}
                    </div>
                    {/* Add badge for dual-repo projects */}
                      {(project.githubClientUrl && project.githubServerUrl) && (
                        <div className="p-1 rounded bg-gradient-to-r from-purple-500 to-pink-500">
                          <GitBranch size={12} className="text-white" />
                        </div>
                      )}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full border ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                                   {/* Action Buttons */}
                  <div className="space-y-3">
                    {/* For projects with separate client/server repos */}
                    {(project.githubClientUrl && project.githubServerUrl) ? (
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={project.githubClientUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium transition-colors text-sm"
                          title="Frontend Repository"
                        >
                          <Code size={16} />
                          Client
                        </a>
                        <a
                          href={project.githubServerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium transition-colors text-sm"
                          title="Backend Repository"
                        >
                          <Server size={16} />
                          Server
                        </a>
                      </div>
                    ) : project.githubUrl ? (
                      // For single-repo projects
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium transition-colors"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                    ) : null}
                    
                    {/* Demo button (if available) */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl font-medium transition-all w-full"
                      >
                        <Eye size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* GitHub CTA */}
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-12 rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
            <Github size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Explore Complete Portfolio</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Dive deeper into my projects with detailed README files, code walkthroughs, 
            and live demonstrations on GitHub.
          </p>
          <a
            href="https://github.com/Duonye"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-colors text-lg"
          >
            <GitBranch size={24} />
            Visit GitHub Profile
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
