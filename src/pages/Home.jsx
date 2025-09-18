import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import OnboardingModal from '../shared/OnboardingModal.jsx'
import { useEffect, useState } from 'react'
import { categories as cats } from '../data/mock.js'
import { 
  GraduationCap, 
  CreditCard, 
  Monitor, 
  MapPin, 
  Code, 
  DollarSign, 
  BookOpen, 
  Trees, 
  Heart,
  Menu,
  X,
  ChevronDown,
  Users,
  Target,
  Eye,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
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
				
				{/* Animated background elements */}
				<div className="absolute inset-0">
					<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
					<div className="absolute top-1/2 right-1/3 w-24 h-24 bg-green-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{opacity:0, y:30}}
						animate={{opacity:1, y:0}}
						transition={{duration:0.8}}
						className="max-w-4xl mx-auto"
					>
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
						<Link 
							to="/youth-registration"
							className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg px-8 py-4 rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
						>
							Get Started →
						</Link>
							<a 
								href="#opportunities" 
								className="bg-navy-900 text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-navy-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
							>
								Explore Opportunities
							</a>
						</div>
<<<<<<< HEAD
					</div>
					<motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className="relative h-64 sm:h-80 md:h-full">
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-emerald-300/20" />
						<div className="absolute inset-6 rounded-2xl bg-white shadow-soft">
						</div>
=======
>>>>>>> 7c5a4f3 (Updated)
					</motion.div>
				</div>
			</section>

<<<<<<< HEAD
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
					{cats.map((name)=> (
						<div key={name} className="card p-4 text-center hover:shadow-md transition">
							<p className="font-medium">{name}</p>
=======
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
							<motion.div 
								key={c.title} 
								initial={{opacity:0, y:20}}
								whileInView={{opacity:1, y:0}}
								transition={{duration:0.5, delay:index * 0.1}}
								className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
							>
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

			{/* Stats Section */}
			<section className="py-20 bg-white relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-navy-900 mb-4">Impact So Far</h2>
						<p className="text-xl text-gray-600">Creating opportunities across India</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<StatCard label="Internships Listed" value={<Counter to={2450} />} />
				<StatCard label="Students Matched" value={<Counter to={8100} />} />
				<StatCard label="Companies Onboarded" value={<Counter to={320} />} />
>>>>>>> 7c5a4f3 (Updated)
						</div>
				</div>
			</section>

<<<<<<< HEAD
			{/* Why Us */}
			<section className="container-px mx-auto py-16">
				<h2 className="section-title">Why Choose Us</h2>
				<div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{[
						{title:'AI Matching', desc:'Personalized recommendations based on your profile.'},
						{title:'Verified Internships', desc:'Opportunities from trusted companies.'},
						{title:'Career Growth', desc:'Gain real-world experience and mentorship.'},
						{title:'Student Dashboard', desc:'Track progress and applications in one place.'},
					].map((c)=> (
						<div key={c.title} className="card p-6">
							<p className="font-semibold">{c.title}</p>
							<p className="mt-2 text-gray-600">{c.desc}</p>
=======
			 {/* Eligibility Criteria Section */}
			<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-navy-900 mb-4">Who Can Apply?</h2>
            <p className="text-xl text-gray-600">
              Check if you meet our eligibility criteria to join this exciting program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<motion.div 
							initial={{opacity:0, y:20}}
							whileInView={{opacity:1, y:0}}
							transition={{duration:0.5, delay:0.1}}
							className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
						>
							<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
							<h3 className="text-lg font-bold text-navy-900 mb-3 text-center">Education</h3>
              <p className="text-gray-600 text-center">
								Not enrolled full time
							</p>
						</motion.div>

						<motion.div 
							initial={{opacity:0, y:20}}
							whileInView={{opacity:1, y:0}}
							transition={{duration:0.5, delay:0.2}}
							className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100"
						>
							<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
							<h3 className="text-lg font-bold text-navy-900 mb-3 text-center">Age Limit</h3>
              <p className="text-gray-600 text-center">
								Age between 21-24 years at the time of application
							</p>
						</motion.div>

						<motion.div 
							initial={{opacity:0, y:20}}
							whileInView={{opacity:1, y:0}}
							transition={{duration:0.5, delay:0.3}}
							className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100"
						>
							<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
							<h3 className="text-lg font-bold text-navy-900 mb-3 text-center">Job Status</h3>
              <p className="text-gray-600 text-center">
								Not employed full time
							</p>
						</motion.div>

						<motion.div 
							initial={{opacity:0, y:20}}
							whileInView={{opacity:1, y:0}}
							transition={{duration:0.5, delay:0.4}}
							className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100"
						>
							<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Monitor className="w-8 h-8 text-white" />
              </div>
							<h3 className="text-lg font-bold text-navy-900 mb-3 text-center">Family Income</h3>
							<div className="text-gray-600 text-center space-y-1">
								<p className="text-sm">No one earning more than ₹8 Lakhs PA</p>
								<p className="text-sm">No member has a govt. job</p>
            </div>
						</motion.div>
          </div>
        </div>
      </section>

			{/* Explore Opportunities Section */}
			<section id="opportunities" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-navy-900 mb-4">Internship Domains You Can Explore</h2>
						<p className="text-xl text-gray-600">Choose from diverse sectors and build your career</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{domains.map((domain, index) => (
							<motion.div
								key={domain.name}
								initial={{opacity:0, y:20}}
								whileInView={{opacity:1, y:0}}
								transition={{duration:0.5, delay:index * 0.1}}
								className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
							>
								<div className={`w-16 h-16 bg-gradient-to-br ${domain.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
									<domain.icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-bold text-navy-900 text-center mb-3">{domain.name}</h3>
								<p className="text-gray-600 text-center">Gain hands-on experience in {domain.name.toLowerCase()} sector with industry leaders</p>
								<div className="mt-6 text-center">
									<span className="text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
										View Details →
									</span>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Core Benefits */}
			<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
				{/* Background decorative elements */}
				<div className="absolute inset-0">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
					<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
				</div>
				
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<motion.div
							initial={{opacity:0, y:20}}
							whileInView={{opacity:1, y:0}}
							transition={{duration:0.6}}
						>
							<h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
								Core Benefits for 
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 block">
									PM Internship Scheme
								</span>
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">Why this program stands out among other opportunities</p>
						</motion.div>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
						{/* Main benefit cards */}
						<motion.div 
							initial={{opacity:0, x:-20}}
							whileInView={{opacity:1, x:0}}
							transition={{duration:0.6, delay:0.1}}
							className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="flex items-center gap-6 mb-6">
									<div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
										<BookOpen className="w-10 h-10 text-white" />
									</div>
									<div>
										<h3 className="text-2xl font-bold text-navy-900 mb-2">Real Experience</h3>
										<p className="text-gray-600">Industry Exposure</p>
									</div>
								</div>
								<p className="text-lg font-semibold text-gray-700 leading-relaxed">
									Get 12 months of hands-on, real-life experience working with India's top companies and industry leaders
								</p>
							</div>
						</motion.div>

						<motion.div 
							initial={{opacity:0, x:20}}
							whileInView={{opacity:1, x:0}}
							transition={{duration:0.6, delay:0.2}}
							className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="flex items-center gap-6 mb-6">
									<div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
										<DollarSign className="w-10 h-10 text-white" />
									</div>
									<div>
										<h3 className="text-2xl font-bold text-navy-900 mb-2">Financial Support</h3>
										<p className="text-gray-600">Monthly Assistance</p>
									</div>
								</div>
								<p className="text-lg font-semibold text-gray-700 leading-relaxed">
									Receive ₹5000 monthly (₹4500 from Government + ₹500 from Industry) to support your growth journey
								</p>
							</div>
						</motion.div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div 
							initial={{opacity:0, x:-20}}
							whileInView={{opacity:1, x:0}}
							transition={{duration:0.6, delay:0.3}}
							className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="flex items-center gap-6 mb-6">
									<div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
										<Heart className="w-10 h-10 text-white" />
									</div>
									<div>
										<h3 className="text-2xl font-bold text-navy-900 mb-2">Startup Grant</h3>
										<p className="text-gray-600">One-time Bonus</p>
									</div>
								</div>
								<p className="text-lg font-semibold text-gray-700 leading-relaxed">
									Receive a one-time grant of ₹6000 for incidentals to help you get started on your professional journey
								</p>
							</div>
						</motion.div>

						<motion.div 
							initial={{opacity:0, x:20}}
							whileInView={{opacity:1, x:0}}
							transition={{duration:0.6, delay:0.4}}
							className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="flex items-center gap-6 mb-6">
									<div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
										<Target className="w-10 h-10 text-white" />
									</div>
									<div>
										<h3 className="text-2xl font-bold text-navy-900 mb-2">Diverse Sectors</h3>
										<p className="text-gray-600">Multiple Options</p>
									</div>
								</div>
								<p className="text-lg font-semibold text-gray-700 leading-relaxed">
									Choose from various high-growth sectors and work with top companies across different industries in India
								</p>
							</div>
						</motion.div>
					</div>

					{/* Bottom highlight section */}
					
				</div>
			</section>

			{/* Featured Opportunities */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between mb-12">
						<div>
							<h2 className="text-4xl font-bold text-navy-900 mb-2">Featured Opportunities</h2>
							<p className="text-xl text-gray-600">Hand-picked internships from top companies</p>
>>>>>>> 7c5a4f3 (Updated)
						</div>
						<a href="/explore" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors text-lg">
							See all →
						</a>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{Array.from({length:6}).map((_,i)=> (
							<OpportunityCard key={i} title="Frontend Developer Intern" company="TechCorp" stipend="₹10k" duration="3 months" />
						))}
					</div>
				</div>
			</section>

<<<<<<< HEAD
			{/* Eligibility */}
			<section className="container-px mx-auto py-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="card p-6">
						<h3 className="section-title">Are you Eligible?</h3>
						<ul className="mt-4 space-y-3 text-gray-700">
							<li className="flex items-start gap-3">
								<span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
								<div>
									<p className="font-medium">Age</p>
									<p className="text-sm text-gray-600">21-24 Years</p>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
								<div>
									<p className="font-medium">Job Status</p>
									<p className="text-sm text-gray-600">Not Employed Full Time</p>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
								<div>
									<p className="font-medium">Education</p>
									<p className="text-sm text-gray-600">Not Enrolled Full Time</p>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
								<div>
									<p className="font-medium">Family (Self/ Spouse / Parents)</p>
									<p className="text-sm text-gray-600">No one is Earning more than ₹8 Lakhs PA</p>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
								<div>
									<p className="font-medium">Government Employment</p>
									<p className="text-sm text-gray-600">No Member has a Govt. Job</p>
								</div>
							</li>
						</ul>
					</div>

					<div className="card p-6">
						<h3 className="section-title">Core Benefits for PM Internship Scheme</h3>
						<ul className="mt-4 space-y-3 text-gray-700 list-disc pl-6">
							<li>12 months real-life experience in India's top companies</li>
							<li>Monthly assistance of ₹4500 by Government of India and ₹500 by Industry</li>
							<li>One-time Grant of ₹6000 for incidentals</li>
							<li>Select from Various Sectors and from top Companies of India</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Featured */}
			<section id="featured" className="container-px mx-auto py-12">
				<div className="flex items-center justify-between">
					<h2 className="section-title">Featured Opportunities</h2>
					<a href="/explore" className="text-primary font-medium">See all</a>
				</div>
				<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{Array.from({length:6}).map((_,i)=> (
						<OpportunityCard key={i} title="Frontend Developer Intern" company="TechCorp" stipend="₹10k" duration="3 months" />
					))}
				</div>
			</section>
=======

>>>>>>> 7c5a4f3 (Updated)

			<OnboardingModal open={open} onClose={()=>setOpen(false)} />

			<style jsx>{`
				.text-navy-900 { color: #0f172a; }
				.bg-navy-900 { background-color: #0f172a; }
				.bg-navy-800 { background-color: #1e293b; }
				.from-navy-900 { --tw-gradient-from: #0f172a; }
				.to-navy-800 { --tw-gradient-to: #1e293b; }
			`}</style>
		</div>
	)
}

export default Home