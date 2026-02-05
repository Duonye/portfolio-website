import { Filter, Search, X } from 'lucide-react'

interface ProjectFilterWidgetProps {
  filter: string
  setFilter: (filter: string) => void
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedTech: string
  setSelectedTech: (tech: string) => void
  techStacks: string[]
}

const ProjectFilterWidget: React.FC<ProjectFilterWidgetProps> = ({
  filter,
  setFilter,
  searchTerm,
  setSearchTerm,
  selectedTech,
  setSelectedTech,
  techStacks
}) => {
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'full-stack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ]

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
          <Filter size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold">Filter Projects</h3>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search projects, technologies, or descriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-10 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-500 focus:outline-none"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-gray-300">Categories</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tech Stack Filters */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-semibold text-gray-300">Tech Stacks</h4>
          {selectedTech && (
            <button
              onClick={() => setSelectedTech('')}
              className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <X size={14} />
              Clear
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {techStacks.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(selectedTech === tech ? '' : tech)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedTech === tech
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {(filter !== 'all' || searchTerm || selectedTech) && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-400">Active filters:</span>
            {filter !== 'all' && (
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm flex items-center gap-1">
                {categories.find(c => c.id === filter)?.label}
                <button onClick={() => setFilter('all')} className="ml-1 hover:text-cyan-300">
                  <X size={12} />
                </button>
              </span>
            )}
            {selectedTech && (
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm flex items-center gap-1">
                {selectedTech}
                <button onClick={() => setSelectedTech('')} className="ml-1 hover:text-purple-300">
                  <X size={12} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectFilterWidget
