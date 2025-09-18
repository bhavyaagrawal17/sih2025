import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const defaultChips = ['Programming','Painting','Photoshop','Mechanical Eng.','Electronics','Medical','Law','Business']

function Chip({label, selected, onClick}) {
	return (
		<button onClick={onClick} className={`px-3 py-1.5 rounded-full border text-sm ${selected? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}>
			{label}
		</button>
	)
}

function OnboardingModal({open, onClose}) {
	const [step, setStep] = useState(1)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [chips, setChips] = useState([])
	const [customSkill, setCustomSkill] = useState('')
	const [education, setEducation] = useState('UG')
	const [goal, setGoal] = useState('Learning')
	const navigate = useNavigate()

	useEffect(()=>{
		if(!open){
			setStep(1)
		}
	},[open])

	const progress = useMemo(()=> (step/5) * 100, [step])

	function addCustomSkill(){
		if(customSkill.trim() && !chips.includes(customSkill.trim())){
			setChips([...chips, customSkill.trim()])
			setCustomSkill('')
		}
	}

	function toggleChip(x){
		setChips(prev => prev.includes(x) ? prev.filter(c=>c!==x) : [...prev, x])
	}

	function onConfirm(){
		onClose?.()
		navigate('/dashboard', { replace: true })
	}

	return (
		<AnimatePresence>
			{open && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="absolute inset-0 bg-black/40" onClick={onClose} />
					<motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:10}} transition={{type:'spring', stiffness:300, damping:25}} className="relative z-10 w-full max-w-2xl card p-6">
						<div className="flex items-center justify-between">
							<h3 className="text-xl font-semibold">Create your profile</h3>
							<button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100">✕</button>
						</div>
						<div className="mt-4 h-2 w-full rounded-full bg-gray-100">
							<div className="h-2 rounded-full bg-primary" style={{width: `${progress}%`}} />
						</div>

						<div className="mt-6 space-y-6">
							{step===1 && (
								<div className="space-y-4">
									<div>
										<label className="block text-sm font-medium">Name</label>
										<input value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Your name" />
									</div>
									<div>
										<label className="block text-sm font-medium">Email</label>
										<input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="you@example.com" />
									</div>
								</div>
							)}

							{step===2 && (
								<div className="space-y-3">
									<p className="font-medium">Skills / Interests</p>
									<div className="flex flex-wrap gap-2">
										{defaultChips.map(c=> (
											<Chip key={c} label={c} selected={chips.includes(c)} onClick={()=>toggleChip(c)} />
										))}
									</div>
									<div className="flex gap-2 pt-2">
										<input value={customSkill} onChange={e=>setCustomSkill(e.target.value)} className="flex-1 rounded-lg border border-gray-300 px-3 py-2" placeholder="Add custom skill" />
										<button className="btn-outline" onClick={addCustomSkill}>Add</button>
									</div>
								</div>
							)}

							{step===3 && (
								<div className="space-y-4">
									<label className="block text-sm font-medium">Education / Experience</label>
									<select value={education} onChange={e=>setEducation(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2">
										<option>UG</option>
										<option>PG</option>
										<option>Diploma</option>
										<option>Fresher</option>
									</select>
								</div>
							)}

							{step===4 && (
								<div className="space-y-4">
									<p className="font-medium">Career Goals</p>
									<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
										{['Learning','Paid internship','Industry project'].map(g => (
											<button key={g} onClick={()=>setGoal(g)} className={`card p-4 text-left ${goal===g? 'ring-2 ring-primary' : ''}`}>
												<p className="font-medium">{g}</p>
											</button>
										))}
									</div>
								</div>
							)}

							{step===5 && (
								<div className="text-center py-6">
									<p className="text-2xl font-semibold">Profile Created Successfully!</p>
									<p className="mt-2 text-gray-600">You will be redirected to your dashboard.</p>
								</div>
							)}
						</div>

						<div className="mt-6 flex justify-between">
							<button className="btn-outline" onClick={onClose}>Cancel</button>
							<div className="flex gap-2">
								{step>1 && step<5 && (
									<button className="btn-outline" onClick={()=>setStep(s=>s-1)}>Back</button>
								)}
								{step<5 && (
									<button className="btn-primary" onClick={()=>setStep(s=>s+1)}>Next</button>
								)}
								{step===5 && (
									<button className="btn-primary" onClick={onConfirm}>Go to Dashboard</button>
								)}
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	)
}

export default OnboardingModal


