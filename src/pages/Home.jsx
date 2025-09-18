import { motion } from 'framer-motion'
import OnboardingModal from '../shared/OnboardingModal.jsx'
import { useEffect, useState } from 'react'
import { categories as cats } from '../data/mock.js'

function StatCard({label, value}) {
	return (
		<div className="card p-6 text-center">
			<p className="text-3xl font-bold text-gray-900">{value}</p>
			<p className="mt-1 text-gray-600">{label}</p>
		</div>
	)
}

function OpportunityCard({title, company, stipend, duration}) {
	return (
		<div className="card p-5 flex flex-col gap-3">
			<div className="flex items-center gap-3">
				<div className="h-10 w-10 rounded-lg bg-gray-200"></div>
				<div>
					<p className="font-semibold">{title}</p>
					<p className="text-sm text-gray-600">{company}</p>
				</div>
			</div>
			<div className="flex items-center gap-4 text-sm text-gray-600">
				<span>Stipend: {stipend}</span>
				<span>Duration: {duration}</span>
			</div>
			<button className="btn-primary mt-auto">Apply</button>
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

	return (
		<div>
			{/* Hero */}
			<section className="bg-gradient-to-b from-white to-blue-50">
				<div className="container-px mx-auto py-20 grid md:grid-cols-2 gap-10 items-center">
					<div>
						<motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
							Find the Perfect Internship for Your Skills
						</motion.h1>
						<p className="mt-4 text-lg text-gray-700">AI-powered matching to connect you with opportunities that fit you best.</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<button className="btn-primary" onClick={()=>setOpen(true)}>Get Started →</button>
							<a href="#featured" className="btn-outline">Explore Opportunities</a>
						</div>
					</div>
					<motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className="relative h-64 sm:h-80 md:h-full">
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-emerald-300/20" />
						<div className="absolute inset-6 rounded-2xl bg-white shadow-soft">
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
					{cats.map((name)=> (
						<div key={name} className="card p-4 text-center hover:shadow-md transition">
							<p className="font-medium">{name}</p>
						</div>
					))}
				</div>
			</section>

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
						</div>
					))}
				</div>
			</section>

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

			<OnboardingModal open={open} onClose={()=>setOpen(false)} />
		</div>
	)
}

export default Home


