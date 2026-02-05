import { GraduationCap, Calendar, BookOpen } from 'lucide-react'

const EducationWidget = () => {
  return (
    <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
          <GraduationCap size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold">Education</h3>
      </div>
      
      <div className="space-y-6">
        <div className="p-4 rounded-xl bg-gray-800/50">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="font-bold text-lg">Advanced Diploma</h4>
              <p className="text-cyan-400">Computer Programming & Analysis</p>
            </div>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
            <Calendar size={12} />
              Sept 2022 - Dec 2025
            </span>
          </div>
          <p className="text-gray-400 mb-3">Fanshawe College, London, ON</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <BookOpen size={14} />
            <span>Full Stack Programming, Networking, OOP, Data Structures and Algorithms</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="h-2 rounded-full bg-gray-700">
            <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationWidget
