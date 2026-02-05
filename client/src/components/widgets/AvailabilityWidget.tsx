import React from 'react'
import { Calendar, Clock, MapPin, Briefcase } from 'lucide-react'

const AvailabilityWidget = () => {
  const items = [
    { icon: <Briefcase size={18} />, label: 'Status', value: 'Open to Opportunities', color: 'text-green-400' },
    { icon: <Clock size={18} />, label: 'Response Time', value: '24-48 Hours', color: 'text-cyan-400' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'London, ON', color: 'text-blue-400' },
    { icon: <Calendar size={18} />, label: 'Start Date', value: 'Immediate', color: 'text-purple-400' },
  ]

  return (
    <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
          <Calendar size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold">Availability</h3>
      </div>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gray-700`}>
                <div className={item.color}>
                  {item.icon}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">{item.label}</div>
                <div className={`font-medium ${item.color}`}>{item.value}</div>
              </div>
            </div>
            <div className={`w-2 h-2 rounded-full ${index === 0 ? 'animate-pulse bg-green-500' : 'bg-gray-600'}`}></div>
          </div>
        ))}
        <div className="flex flex-wrap gap-2">
          {['Full-time | ', 'Contract |', 'Remote |', 'Hybrid'].map((type, index) => (
            <span key={index} className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
              {type}
            </span>
          ))}
      </div>
      </div>
      
      
    </div>
  )
}

export default AvailabilityWidget