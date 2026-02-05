import React from 'react'
import { TrendingUp, Users, GitBranch, CheckCircle } from 'lucide-react'

const ProjectStatsWidget = () => {
  const stats = [
    { icon: <GitBranch size={18} />, value: '10+', label: 'Projects' },
    { icon: <Users size={18} />, value: '3', label: 'Team Projects' },
    { icon: <CheckCircle size={18} />, value: '100%', label: 'Sprints' },
    { icon: <TrendingUp size={18} />, value: '6+', label: 'Tech Stacks' },
  ]

  return (
    <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
          <TrendingUp size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold">Project Stats</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 rounded-xl bg-gray-800/30">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-400">
              {stat.icon}
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      
      <div className="space-y-3">
        <div className="h-2 rounded-full bg-gray-700">
          <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: '80%' }}></div>
        </div>
        <div className="h-2 rounded-full bg-gray-700">
          <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: '90%' }}></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectStatsWidget
