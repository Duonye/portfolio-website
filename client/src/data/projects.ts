export interface Project {
  id: number;
  name: string;
  description: string;
  period: string;
  technologies: string[];
  category: string;
  githubUrl?: string; 
  githubClientUrl?: string; 
  githubServerUrl?: string; 
  collaborators: boolean;
  featured?: boolean;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'WorkSpend - Employee Expense Tracker',
    description: 'Full-stack enterprise application for tracking employee expenses with dynamic PDF report generation.',
    period: 'Sept 2025 - Dec 2025',
    technologies: ['Spring Boot', 'Angular', 'H2', 'Docker', 'AWS EC2', 'iText7'],
    category: 'full-stack',
    githubClientUrl: 'https://github.com/Duonye/WorkSpend_Client',
    githubServerUrl: 'https://github.com/Duonye/WorkSpend_Server',
    collaborators: false,
    featured: true
  },
  {
    id: 2,
    name: 'ITAssetManager - IT Asset Tracking',
    description: '.NET + Razor application for tracking IT assets with role-based authentication and AWS RDS.',
    period: 'Sept 2025 - Dec 2025',
    technologies: ['.NET Core', 'Razor Pages', 'MSSQL', 'AWS RDS', 'JWT'],
    category: 'full-stack',
    githubUrl: 'https://github.com/Salal226/Code-Innovators-',
    collaborators: true,
    featured: true
  },
  {
    id: 3,
    name: 'VenBuy - Vendor Purchase Tracker',
    description: 'Vendor purchase tracking system with Spring Boot backend and Angular frontend.',
    period: 'Sept 2025 - Dec 2025',
    technologies: ['Spring Boot', 'Angular', 'H2', 'Docker', 'AWS'],
    category: 'full-stack',
    githubClientUrl: 'https://github.com/Duonye/VenBuy_Client',
    githubServerUrl: 'https://github.com/Duonye/VenBuy_Server',
    collaborators: false,
    featured: true
  },
  {
    id: 4,
    name: 'ByteMates - IT Professionals Meetup App',
    description: 'MERN stack meetup application for IT professionals with Firebase authentication.',
    period: 'Jan 2025 - Apr 2025',
    technologies: ['React', 'Express.js', 'MongoDB', 'Firebase', 'Material-UI'],
    category: 'full-stack',
    githubUrl: 'https://github.com/joyowo-17/ByteMates',
    collaborators: true,
    featured: true
  },
  {
    id: 5,
    name: 'TravelPing - Travel Booking System',
    description: 'React-based SPA for travel booking with real-time features and MongoDB optimization.',
    period: 'Jan 2025 - Apr 2025',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Socket.io', 'Material-UI'],
    category: 'full-stack',
    githubClientUrl: 'https://github.com/Duonye/TravelPing_Client',
    githubServerUrl: 'https://github.com/Duonye/TravelPing_Server',
    collaborators: false,
    featured: true
  },
  {
    id: 6,
    name: 'EZComm - Real-Time Chat App',
    description: 'Real-time chat application using WebSockets for instant messaging.',
    period: 'Jan 2025 - Apr 2025',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS', 'Docker'],
    category: 'full-stack',
    githubUrl: 'https://github.com/Duonye/EZComm_Web',
    collaborators: false,
    featured: false
  },
  {
    id: 7,
    name: 'GrubFind - Food Order & Restaurant Finder',
    description: 'Vue.js and .NET Core application with 4-layered architecture for food ordering services.',
    period: 'May 2024 - Aug 2024',
    technologies: ['Vue.js', '.NET Core', 'MSSQL', 'Azure', 'SCSS', 'Vite'],
    category: 'full-stack',
    githubClientUrl: 'https://github.com/Duonye/GrubFind_Client',
    githubServerUrl: 'https://github.com/Duonye/GrubFind_Server',
    collaborators: false,
    featured: true
  },
  {
    id: 8,
    name: 'TechSolve - Laptop Store',
    description: 'E-commerce platform for laptop sales with inventory management.',
    period: 'May 2024 - Aug 2024',
    technologies: ['Vue.js', '.NET Core', 'MSSQL', 'Azure', 'iText7'],
    category: 'full-stack',
    githubClientUrl: 'https://github.com/Duonye/TechSolve_Client',
    githubServerUrl: 'https://github.com/Duonye/TechSolve_Server',
    collaborators: false,
    featured: false
  },
  {
    id: 9,
    name: 'Helpdesk Ticketing System',
    description: 'Student information and helpdesk system built with ASP.NET Core and MSSQL Server.',
    period: 'Sept 2023 - Dec 2023',
    technologies: ['ASP.NET Core', 'jQuery', 'MSSQL', 'Azure', 'iText7', 'IIS'],
    category: 'full-stack',
    githubUrl: 'https://github.com/Duonye/Helpdesk_Web',
    collaborators: false,
    featured: false
  },

  
  
];
