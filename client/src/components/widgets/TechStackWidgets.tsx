import React from 'react'
import { Code, Database, Cloud, Cpu } from 'lucide-react'

const TechStackWidget = () => {
  const stacks = [
    { icon: <Code size={20} />, name: 'Frontend', tech: 'Angular, React, Vue' },
    { icon: <Cpu size={20} />, name: 'Backend', tech: '.NET Core, Spring Boot' },
    { icon: <Database size={20} />, name: 'Database', tech: 'SQL Server, MongoDB' },
    { icon: <Cloud size={20} />, name: 'Cloud', tech: 'AWS, Azure, Docker' },
  ]

  return (
    <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
          <Code size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold">Tech Stack</h3>
      </div>
      
      <div className="space-y-4">
        {stacks.map((stack, index) => (
          <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50">
            <div className="text-cyan-400">
              {stack.icon}
            </div>
            <div className="flex-1">
              <div className="font-medium">{stack.name}</div>
              <div className="text-sm text-gray-400">{stack.tech}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="text-sm text-gray-400 text-center">
          Proficient across the full development lifecycle
        </div>
      </div> */}
    </div>
  )
}

export default TechStackWidget