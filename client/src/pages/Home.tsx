import { motion } from 'framer-motion'
import { ArrowRight} from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Anton'] text-4xl md:text-5xl mb-6">
            Building Scalable Web Applications
          </h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Specializing in <span className="font-bold text-[#496B87]">.NET Core C#</span>, 
            <span className="font-bold text-[#496B87]"> Angular</span>, and 
            <span className="font-bold text-[#496B87]"> enterprise application development</span> 
            with cloud platforms and modern frameworks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/projects"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="font-['Anton'] text-3xl mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how we can work together to create impactful digital solutions.
        </p>
        <Link
          to="/contact"
        >
          Start a Conversation
          <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
        </Link>
      </section>
    </div>
  )
}

export default Home
