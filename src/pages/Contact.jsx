import { useState } from 'react'

function FAQ({q, a}){
	const [open, setOpen] = useState(false)
	return (
		<div className="border-b border-gray-200 py-3">
			<button className="w-full flex items-center justify-between text-left" onClick={()=>setOpen(o=>!o)}>
				<span className="font-medium">{q}</span>
				<span>{open? '−' : '+'}</span>
			</button>
			{open && <p className="mt-2 text-gray-600 text-sm">{a}</p>}
		</div>
	)
}

function Contact(){
	return (
		<div className="container-px mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
			<div>
				<h1 className="section-title">Contact Us</h1>
				<form className="mt-6 card p-6 space-y-4">
					<div>
						<label className="block text-sm font-medium">Name</label>
						<input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Your name" />
					</div>
					<div>
						<label className="block text-sm font-medium">Email</label>
						<input type="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="you@example.com" />
					</div>
					<div>
						<label className="block text-sm font-medium">Message</label>
						<textarea className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" rows={5} placeholder="How can we help?" />
					</div>
					<button className="btn-primary">Send</button>
				</form>
			</div>
			<div>
				<h2 className="section-title">FAQ</h2>
				<div className="mt-4 card p-6">
					{[
						{q:'How does matching work?', a:'We use a rule-based and ML approach to rank internships based on your profile.'},
						{q:'Is it free for students?', a:'Yes, students can use the platform for free.'},
						{q:'How long does it take to get matched?', a:'You will see recommendations immediately after completing your profile.'}
					].map(x=> <FAQ key={x.q} q={x.q} a={x.a} />)}
				</div>
			</div>
		</div>
	)
}

export default Contact
