import { Code, Cpu, Database, Cloud, TestTube, GitBranch } from 'lucide-react'

const SkillsWidget = () => {
  const skillCategories = [
    { icon: <Code size={16} />, category: 'Frontend', skills: ['Angular', 'React', 'Vue.js', 'TypeScript'] },
    { icon: <Cpu size={16} />, category: 'Backend', skills: ['.NET Core', 'Spring Boot', 'Node.js', 'REST APIs'] },
    { icon: <Database size={16} />, category: 'Database', skills: ['SQL Server', 'MongoDB', 'H2', 'Entity Framework'] },
    { icon: <Cloud size={16} />, category: 'Cloud/DevOps', skills: ['AWS', 'Azure', 'Docker', 'CI/CD'] },
    { icon: <TestTube size={16} />, category: 'Testing', skills: ['Cypress', 'JUnit', 'xUnit', 'Swagger'] },
    { icon: <GitBranch size={16} />, category: 'Tools', skills: ['Git', 'Agile/Scrum', 'VS Code', 'Visual Studio'] },
  ]

  return (
    <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
          <Code size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold">Skills Matrix</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="p-4 rounded-xl bg-gray-800/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-cyan-400">
                {category.icon}
              </div>
              <h4 className="font-semibold">{category.category}</h4>
            </div>
            <div className="space-y-2">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="text-sm text-gray-400">
                  • {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsWidget
