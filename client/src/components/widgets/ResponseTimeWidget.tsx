import React from 'react'
import { Clock, CheckCircle, MessageSquare, Zap } from 'lucide-react'

const ResponseTimeWidget = () => {
  const stats = [
    { icon: <Clock size={16} />, label: 'Response Time', value: 'Within 24 Hours', color: 'text-cyan-400' },
    { icon: <CheckCircle size={16} />, label: 'Availability', value: 'Immediate', color: 'text-green-400' },
    { icon: <MessageSquare size={16} />, label: 'Preferred Contact', value: 'Email', color: 'text-blue-400' },
  ]

  const interests = [
    'Full-time Positions',
    'Contract Work',
    'Project Collaboration',
    'Technical Consultation',
    'Freelance Projects'
  ]

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
          <Zap size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold">Quick Response</h3>
      </div>
      
      <div className="space-y-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-gray-800/50">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gray-700`}>
                <div className={stat.color}>
                  {stat.icon}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className={`font-semibold ${stat.color}`}>{stat.value}</div>
              </div>
            </div>
            {index === 0 && (
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            )}
          </div>
        ))}
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">Currently Interested In</h4>
        <div className="space-y-3">
          {interests.map((interest, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
              <span className="text-sm text-gray-400">{interest}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResponseTimeWidget