import React from 'react'
import { Briefcase, Calendar, Users, Target } from 'lucide-react'

const ExperienceWidget = () => {
  const experiences = [
    {
      role: 'Front Desk Clerk',
      company: 'Western University',
      period: 'Sept 2024 - May 2025',
      points: ['System management', 'Process improvement', 'Cross-department coordination']
    },
    {
      role: 'Data Analyst Intern',
      company: 'Inclusivity Institute',
      period: 'Mar 2024 - Apr 2024',
      points: ['Data visualization', 'Dashboard development', 'Data cleaning']
    }
  ]

  return (
    <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
          <Briefcase size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold">Experience</h3>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="p-4 rounded-xl bg-gray-800/50">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-bold text-lg">{exp.role}</h4>
                <p className="text-cyan-400">{exp.company}</p>
              </div>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-1">
                <Calendar size={12} />
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                  <Target size={12} className="text-cyan-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Users size={14} />
          <span>Strong communication & collaboration skills</span>
        </div>
      </div>
    </div>
  )
}

export default ExperienceWidget