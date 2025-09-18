import { useMemo, useState, useEffect } from 'react'
import { recommendations } from '../data/mock.js'
import ProfileEditor from '../components/ProfileEditor.jsx'

function ProgressBar({value}){
	return (
		<div className="w-full h-3 rounded-full bg-gray-200">
			<div className="h-3 rounded-full bg-primary" style={{width: `${value}%`}} />
		</div>
	)
}

const STORAGE_KEY = 'sih_portal_profile'

function Dashboard(){
	const [filter, setFilter] = useState('All')
	const [isEditing, setIsEditing] = useState(false)
	const [profile, setProfile] = useState({
		name: 'Student',
		headline: 'Aspiring Intern',
		email: '',
		phone: '',
		location: '',
		portfolio: '',
		linkedin: '',
		github: '',
		degree: '',
		college: '',
		gradYear: '',
		about: '',
		skills: [],
		resumeName: ''
	})

	useEffect(()=>{
		try{
			const raw = localStorage.getItem(STORAGE_KEY)
			if(raw){
				const parsed = JSON.parse(raw)
				setProfile(prev=> ({...prev, ...parsed}))
			}
		}catch{ /* ignore */ }
	},[])

	useEffect(()=>{
		try{
			localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
		}catch{ /* ignore */ }
	},[profile])

	function handleProfileChange(field, value){
		setProfile(prev => ({ ...prev, [field]: value }))
	}
	function handleAddSkill(skill){
		setProfile(prev => ({ ...prev, skills: Array.from(new Set([...(prev.skills||[]), skill])) }))
	}
	function handleRemoveSkill(skill){
		setProfile(prev => ({ ...prev, skills: (prev.skills||[]).filter(s => s !== skill) }))
	}
	function handleResumeSelected(file){
		setProfile(prev => ({ ...prev, resumeName: file.name }))
	}
	function handleSave(){
		alert('Profile saved')
		setIsEditing(false)
	}

	const filtered = useMemo(()=> recommendations.filter(r => filter==='All' || r.location===filter), [filter])

	const profileStrength = useMemo(()=>{
		let score = 0
		const checks = [
			Boolean(profile.name),
			Boolean(profile.email),
			(profile.skills||[]).length >= 3,
			Boolean(profile.resumeName),
			Boolean(profile.degree && profile.college),
			Boolean(profile.linkedin || profile.github),
		]
		score = Math.round((checks.filter(Boolean).length / checks.length) * 100)
		return score
	},[profile])

	return (
		<div className="container-px mx-auto py-8">
			<div className="card p-6 bg-gradient-to-r from-blue-50 to-emerald-50">
				<p className="text-2xl font-semibold">Hi {profile.name || 'Student'} 👋</p>
				<p className="mt-1 text-gray-700">Keep your profile updated to get better recommendations.</p>
				<div className="mt-4">
					<button className="btn-primary" onClick={()=>setIsEditing(v=>!v)}>{isEditing ? 'Close Editor' : 'Edit Profile'}</button>
				</div>
			</div>

			<div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
				<div className="lg:col-span-3 space-y-6">
					{isEditing && (
						<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
							<div className="xl:col-span-2">
								<ProfileEditor
									profile={profile}
									onProfileChange={handleProfileChange}
									onAddSkill={handleAddSkill}
									onRemoveSkill={handleRemoveSkill}
									onResumeSelected={handleResumeSelected}
									onSave={handleSave}
									onCancel={()=>setIsEditing(false)}
								/>
							</div>
						</div>
					)}

					<div className="card p-5">
						<h3 className="section-title mb-2">Profile Preview</h3>
						<div className="flex items-center gap-3">
							<div className="h-12 w-12 rounded-full bg-primary/20" />
							<div>
								<p className="font-semibold">{profile.name || 'Student Name'}</p>
								<p className="text-sm text-gray-600">{profile.headline || 'Your headline'}</p>
							</div>
						</div>
						<div className="mt-3 text-sm text-gray-700 space-y-1">
							<p>{profile.location}</p>
							<p>{profile.email}</p>
							<p className="truncate">{profile.portfolio}</p>
						</div>
						<div className="mt-3 flex flex-wrap gap-2">
							{(profile.skills||[]).slice(0, 8).map(s => (
								<span key={s} className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs">{s}</span>
							))}
							{(profile.skills||[]).length === 0 && <span className="text-sm text-gray-500">No skills added yet</span>}
						</div>
						{profile.resumeName && <p className="mt-3 text-sm text-gray-600">Resume: {profile.resumeName}</p>}
					</div>

					<div className="flex items-center justify-between">
						<h2 className="section-title">AI Recommendations</h2>
						<select value={filter} onChange={e=>setFilter(e.target.value)} className="rounded-lg border border-gray-300 px-3 py-2">
							{['All','Remote','Delhi','Bengaluru'].map(x=> <option key={x}>{x}</option>)}
						</select>
					</div>
					<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
						{filtered.map(item => (
							<div key={item.id} className="card p-5 flex flex-col gap-3">
								<div className="flex items-center gap-3">
									<div className="h-10 w-10 rounded-lg bg-gray-200" />
									<div>
										<p className="font-semibold">{item.title}</p>
										<p className="text-sm text-gray-600">{item.company}</p>
									</div>
								</div>
								<div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
									<span>{item.location}</span>
									<span>{item.duration}</span>
									<span>{item.stipend}</span>
								</div>
								<button className="btn-primary mt-auto">Apply</button>
							</div>
						))}
					</div>
				</div>
				<div className="space-y-6">
					<div className="card p-5">
						<p className="font-semibold">Profile Strength</p>
						<div className="mt-3 flex items-center gap-3">
							<ProgressBar value={profileStrength} />
							<span className="text-sm text-gray-700">{profileStrength}%</span>
						</div>
						<ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
							<li>Add more skills to improve matches</li>
							<li>Upload your resume</li>
							<li>Complete education details</li>
						</ul>
					</div>
					<div className="card p-5">
						<p className="font-semibold">Quick Stats</p>
						<div className="mt-3 grid grid-cols-3 gap-3 text-center">
							<div className="p-3 rounded-lg bg-gray-50">
								<p className="text-xl font-bold">7</p>
								<p className="text-sm text-gray-600">Applications</p>
							</div>
							<div className="p-3 rounded-lg bg-gray-50">
								<p className="text-xl font-bold">3</p>
								<p className="text-sm text-gray-600">Shortlists</p>
							</div>
							<div className="p-3 rounded-lg bg-gray-50">
								<p className="text-xl font-bold">12</p>
								<p className="text-sm text-gray-600">Matches</p>
							</div>
						</div>
					</div>
					<div className="card p-5">
						<p className="font-semibold">Trending Internships</p>
						<div className="mt-3 grid grid-cols-2 gap-3">
							{['UI/UX Designer','ML Engineer','Product Manager','QA Tester'].map(x=> (
								<div key={x} className="rounded-lg border border-gray-200 p-3 text-sm">{x}</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard


