function Step({num, title, desc}){
	return (
		<div className="card p-5">
			<div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">{num}</div>
			<p className="mt-3 font-semibold">{title}</p>
			<p className="mt-1 text-gray-600 text-sm">{desc}</p>
		</div>
	)
}

function About(){
	return (
		<div className="container-px mx-auto py-10">
			<h1 className="section-title">About SIH Internship Matcher</h1>
			<p className="mt-3 text-gray-700 max-w-3xl">We leverage AI to match students with the best internship opportunities based on skills, education, and interests. Our platform is designed to be simple, modern, and effective for students and companies alike.</p>
			<h2 className="mt-10 section-title">How it works</h2>
			<div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
				<Step num={1} title="Register" desc="Create your student account in minutes." />
				<Step num={2} title="Fill Skills" desc="Tell us your skills and interests." />
				<Step num={3} title="Get Matched" desc="Receive tailored internship matches." />
				<Step num={4} title="Apply" desc="Submit applications directly from your dashboard." />
				<Step num={5} title="Get Internship" desc="Land the right internship for you!" />
			</div>
		</div>
	)
}

export default About


