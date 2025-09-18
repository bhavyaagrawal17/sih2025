import { useMemo, useState } from 'react'

const allInternships = Array.from({length:24}).map((_,i)=> ({
	id: i+1,
	title: i%2===0? 'Frontend Developer Intern' : 'Data Analyst Intern',
	company: i%3===0? 'TechCorp' : 'DataWorks',
	location: ['Remote','Delhi','Bengaluru','Mumbai'][i%4],
	duration: ['2 months','3 months','6 months'][i%3],
	stipend: ['₹5k','₹10k','₹15k'][i%3],
	mode: i%2===0? 'Remote':'On-site',
}))

function InternshipCard({item}){
	return (
		<div className="card p-5 flex flex-col gap-3">
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
				<span>{item.mode}</span>
			</div>
			<button className="btn-primary mt-auto">Apply</button>
		</div>
	)
}

function Explore(){
	const [query, setQuery] = useState('')
	const [location, setLocation] = useState('All')
	const [category, setCategory] = useState('All')
	const [mode, setMode] = useState('All')
	const [page, setPage] = useState(1)

	const filtered = useMemo(()=>{
		return allInternships.filter(x => 
			(x.title.toLowerCase().includes(query.toLowerCase()) || x.company.toLowerCase().includes(query.toLowerCase())) &&
			(location==='All' || x.location===location) &&
			(mode==='All' || x.mode===mode)
		)
	}, [query, location, mode])

	const pageSize = 9
	const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
	const pageItems = filtered.slice((page-1)*pageSize, page*pageSize)

	return (
		<div className="container-px mx-auto py-10">
			<h1 className="section-title">Explore Internships</h1>
			<div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
				<div className="card p-4 space-y-3 h-max">
					<input value={query} onChange={e=>setQuery(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Search by title or company" />
					<div>
						<label className="block text-sm font-medium">Location</label>
						<select value={location} onChange={e=>setLocation(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2">
							{['All','Remote','Delhi','Bengaluru','Mumbai'].map(x=> <option key={x}>{x}</option>)}
						</select>
					</div>
					<div>
						<label className="block text-sm font-medium">Mode</label>
						<select value={mode} onChange={e=>setMode(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2">
							{['All','Remote','On-site'].map(x=> <option key={x}>{x}</option>)}
						</select>
					</div>
					<div>
						<label className="block text-sm font-medium">Category</label>
						<select value={category} onChange={e=>setCategory(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2">
							{['All','Programming','Design','Business'].map(x=> <option key={x}>{x}</option>)}
						</select>
					</div>
				</div>
				<div className="lg:col-span-3">
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
						{pageItems.map(item=> <InternshipCard key={item.id} item={item} />)}
					</div>
					<div className="mt-6 flex items-center justify-center gap-2">
						<button className="btn-outline" disabled={page===1} onClick={()=>setPage(p=>Math.max(1,p-1))}>Prev</button>
						<p className="text-sm text-gray-600">Page {page} of {totalPages}</p>
						<button className="btn-outline" disabled={page===totalPages} onClick={()=>setPage(p=>Math.min(totalPages,p+1))}>Next</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Explore


