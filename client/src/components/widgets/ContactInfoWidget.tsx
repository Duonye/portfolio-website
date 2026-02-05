import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, FileText } from 'lucide-react'

const ContactInfoWidget = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'allisondaniel2203@gmail.com',
      link: 'mailto:allisondaniel2203@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      value: '+1 (226) 224-0868',
      link: 'tel:+12262240868',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'London, Ontario',
      link: 'https://maps.google.com/?q=London+Ontario',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      url: 'https://github.com/Duonye',
      color: 'hover:bg-gray-700'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/daniel-allison-219818256/',
      color: 'hover:bg-blue-900/30'
    },
    {
      icon: <FileText size={20} />,
      label: 'Resume',
      url: '/resume.pdf',
      color: 'hover:bg-green-900/30'
    }
  ]

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
          <Mail size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold">Contact Info</h3>
      </div>
      
      <div className="space-y-4 mb-8">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all group"
          >
            <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
              <div className="text-white">
                {info.icon}
              </div>
            </div>
            <div className="flex-1">
              <div className="font-semibold">{info.title}</div>
              <div className="text-gray-400 text-sm">{info.value}</div>
            </div>
          </a>
        ))}
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">Connect With Me</h4>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-800 border border-gray-700 ${social.color} transition-all`}
            >
              {social.icon}
              <span className="text-sm">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactInfoWidget