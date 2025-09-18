import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import OnboardingModal from '../shared/OnboardingModal.jsx'
import { useEffect, useState } from 'react'
import { categories as cats } from '../data/mock.js'
import { 
  GraduationCap, CreditCard, Monitor, MapPin, Code, DollarSign, BookOpen, Trees, Heart,
  Users, Target, Eye
} from 'lucide-react';

function StatCard({label, value}) {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <p className="text-4xl font-bold text-navy-900 mb-2">{value}</p>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  )
}

function OpportunityCard({title, company, stipend, duration}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
          <Code className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="font-bold text-navy-900 text-lg">{title}</p>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>
      <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
        <span className="flex items-center gap-1">
          <DollarSign className="w-4 h-4" />
          {stipend}
        </span>
        <span>{duration}</span>
      </div>
      <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        Apply Now
      </button>
    </div>
  )
}

function Counter({to}){
  const [n, setN] = useState(0)
  useEffect(()=>{
    let raf
    const start = performance.now()
    const duration = 900
    const step = (now)=>{
      const p = Math.min(1, (now-start)/duration)
      setN(Math.floor(p*to))
      if(p<1){ raf = requestAnimationFrame(step) }
    }
    raf = requestAnimationFrame(step)
    return ()=> cancelAnimationFrame(raf)
  },[to])
  return <span>{n.toLocaleString()}</span>
}

function Home() {
  const [open, setOpen] = useState(false)

  const domains = [
    { name: 'Technology', icon: Monitor, color: 'from-blue-500 to-purple-600' },
    { name: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-600' },
    { name: 'Rural Development', icon: Trees, color: 'from-green-500 to-emerald-600' },
    { name: 'Education', icon: BookOpen, color: 'from-orange-500 to-yellow-600' },
    { name: 'Finance', icon: DollarSign, color: 'from-indigo-500 to-blue-600' },
    { name: 'Digital Marketing', icon: Target, color: 'from-purple-500 to-pink-600' }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-orange-500/5"></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-green-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-6 leading-tight">
              Empowering India's Youth for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 block">
                Tomorrow's Opportunities
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              A government-backed initiative offering industry internships and real-world exposure to build your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/youth-registration" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg px-8 py-4 rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Get Started →
              </Link>
              <a href="#opportunities" className="bg-navy-900 text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-navy-800 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Explore Opportunities
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-px mx-auto py-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Internships Listed" value={<Counter to={10000} />} />
        <StatCard label="Students Matched" value={<Counter to={100000} />} />
        <StatCard label="Companies Onboarded" value={<Counter to={3200} />} />
      </section>

      {/* Categories */}
      <section className="container-px mx-auto py-12">
        <h2 className="section-title">Popular Categories</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {cats.map((name) => (
            <div key={name} className="card p-4 text-center hover:shadow-md transition">
              <p className="font-medium">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Your gateway to a successful career</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {title:'AI Matching', desc:'Personalized recommendations based on your profile and skills.', icon: Target},
              {title:'Verified Internships', desc:'Opportunities from trusted and certified companies.', icon: Eye},
              {title:'Career Growth', desc:'Gain real-world experience and professional mentorship.', icon: Users},
              {title:'Student Dashboard', desc:'Track progress and applications in one centralized place.', icon: Monitor},
            ].map((c, index)=> (
              <motion.div key={c.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:index * 0.1}} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-bold text-navy-900 text-lg mb-2">{c.title}</p>
                <p className="text-gray-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Who Can Apply?</h2>
            <p className="text-xl text-gray-600">Check if you meet our eligibility criteria to join this exciting program</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Education */}
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.1}} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-3 text-center">Education</h3>
              <p className="text-gray-600 text-center">Not enrolled full time</p>
            </motion.div>

            {/* Age Limit */}
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.2}} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-3 text-center">Age Limit</h3>
              <p className="text-gray-600 text-center">Age between 21-24 years at the time of application</p>
            </motion.div>

            {/* Job Status */}
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.3}} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-3 text-center">Job Status</h3>
              <p className="text-gray-600 text-center">Should not be employed elsewhere</p>
            </motion.div>

            {/* Location */}
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.4}} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-3 text-center">Location</h3>
              <p className="text-gray-600 text-center">Open to candidates from across India</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internship Domains */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-navy-900 mb-12 text-center">Internship Domains</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {domains.map((d, idx)=> (
              <motion.div key={d.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:idx*0.1}} className={`bg-gradient-to-br ${d.color} p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <d.icon className="w-10 h-10 text-white mb-3" />
                <p className="text-white font-semibold text-center">{d.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-8">Core Benefits</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Gain valuable experience, expand your network, and build your future through India's largest youth internship initiative.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title:'Skill Development', icon: BookOpen},
              {title:'Networking', icon: Users},
              {title:'Certification', icon: GraduationCap},
            ].map((b, idx)=> (
              <motion.div key={b.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:idx*0.1}} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <b.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-navy-900 font-bold text-lg">{b.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section id="opportunities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-12">Featured Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title:'Web Development Intern', company:'TCS', stipend:'₹15k/month', duration:'6 months'},
              {title:'AI Research Intern', company:'Infosys', stipend:'₹25k/month', duration:'3 months'},
              {title:'Digital Marketing Intern', company:'Wipro', stipend:'₹10k/month', duration:'2 months'},
            ].map((o, idx)=> (
              <OpportunityCard key={idx} {...o} />
            ))}
          </div>
        </div>
      </section>

      <OnboardingModal open={open} onClose={()=>setOpen(false)} />
    </div>
  )
}

export default Home
