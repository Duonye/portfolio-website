import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Home, User, Briefcase, Mail, Github, Linkedin, FileText } from 'lucide-react'

const Layout = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={24} /> },
    { path: '/about', label: 'About', icon: <User size={24} /> },
    { path: '/projects', label: 'Projects', icon: <Briefcase size={24} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={24} /> },
  ]

  return (
    <div className="min-h-screen bg-[#9BA9BD] text-[#333]">
      {/* Header */}
      <header className="bg-[#9BA9BD] border-b-2 border-[#333] py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-block group">
            <h1 className="text-5xl md:text-6xl font-['Anton'] m-0 p-2.5">
              <span className="text-[#333]">Daniel </span>
              <span className="text-[#496B87]">Allison</span>
            </h1>
            <div className="text-xl font-bold text-[#333] ml-2.5">
              Full Stack Developer
            </div>
          </Link>
        </div>
            {/* Social Links Bar */}
        <div className="socials-links">
          <a
              href="https://github.com/Duonye"
              target="_blank"
              rel="noopener noreferrer"
              // className="flex items-center space-x-2 text-white no-underline font-bold text-[#496B87] transition-colors"
            >
              <Github size={20} />
              <span>  </span>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-allison-219818256/"
              target="_blank"
              rel="noopener noreferrer"
              // className="flex items-center space-x-2 text-white no-underline font-bold text-[#496B87] transition-colors"
            >
              <Linkedin size={20} />
              <span>  </span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              // className="flex items-center space-x-2 text-white no-underline font-bold  text-[#496B87] transition-colors"
            >
              <FileText size={20} />
              <span></span>
            </a>
            {/* <img className = "myImg" src = "/src/assets/ProfilePicture.jpg" alt="My Photo" width="100px" height="100px" style={{marginLeft: "250px"}}></img> */}
        </div>
      </header>

      {/* Main Navigation - Horizontal with hover effect */}
      <nav className="bg-[#496B87] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex justify-center space-x-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li 
                key={item.path} 
                className="border-t-2 border-[#333] border-b-2 last:border-b-2 transition-all duration-300 hover:translate-x-2.5 hover:bg-[#3a556b] flex-1 max-w-[200px]"
              >
                <Link
                  to={item.path}
                  className={`flex items-center justify-center space-x-2 text-white no-underline p-2.5 text-xl font-bold block ${
                    location.pathname === item.path ? 'bg-[#3a556b]' : ''
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-['Anton'] text-2xl mb-4">Contact</h3>
              <p className="text-[#9BA9BD]">
                London, Ontario, Canada
                <br />
                Full Stack Developer
              </p>
            </div>
            
            <div>
              <h3 className="font-['Anton'] text-2xl mb-4">Navigation</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-[#9BA9BD] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-['Anton'] text-2xl mb-4">Technologies</h3>
              <p className="text-[#9BA9BD]">
                .NET Core • Angular • React • Spring Boot
                <br />
                AWS • Azure • SQL Server • MongoDB
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-[#496B87] text-center">
            <p className="text-[#9BA9BD]">
              © {new Date().getFullYear()} Daniel Allison. Built with React, TypeScript & Vite.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout