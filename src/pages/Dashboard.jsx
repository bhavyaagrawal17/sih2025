import { useMemo, useState } from 'react'
import { recommendations } from '../data/mock.js'

function ProgressBar({value}){
	return (
		<div className="w-full h-3 rounded-full bg-gray-200">
			<div className="h-3 rounded-full bg-primary" style={{width: `${value}%`}} />
		</div>
	)
}

function Dashboard(){
	const [filter, setFilter] = useState('All')
	const profileStrength = 76
	const filtered = useMemo(()=> recommendations.filter(r => filter==='All' || r.location===filter), [filter])

	return (
		<div className="container-px mx-auto py-8">
			<div className="card p-6 bg-gradient-to-r from-blue-50 to-emerald-50">
				<p className="text-2xl font-semibold">Hi Student 👋</p>
				<p className="mt-1 text-gray-700">Here are your recommended internships.</p>
			</div>

			<div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
				<div className="lg:col-span-3">
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


