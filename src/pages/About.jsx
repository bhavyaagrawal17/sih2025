function Step({num, title, desc}){
	return (
		<div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
			<div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold">{num}</div>
			<p className="mt-4 font-bold text-navy-900">{title}</p>
			<p className="mt-2 text-gray-600 text-sm">{desc}</p>
		</div>
	)
}

function About(){
	return (
		<div className="bg-gray-50 min-h-screen pt-16">
			<section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl md:text-5xl font-extrabold text-navy-900">
						About the PM Internship Scheme
					</h1>
					<p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
						We connect students with meaningful industry internships across India, helping bridge the gap between education and employment.
					</p>
				</div>
			</section>

			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-navy-900 text-center">How it works</h2>
					<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
						<Step num={1} title="Register" desc="Create your student account in minutes." />
						<Step num={2} title="Fill Skills" desc="Tell us your skills and interests." />
						<Step num={3} title="Get Matched" desc="Receive tailored internship matches." />
						<Step num={4} title="Apply" desc="Submit applications from your dashboard." />
						<Step num={5} title="Get Internship" desc="Land the right internship for you!" />
					</div>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl">
							<h3 className="text-2xl font-bold mb-2">Government Backed</h3>
							<p className="text-orange-50">An official initiative supporting skill development and industry exposure.</p>
						</div>
						<div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg">
							<h3 className="text-2xl font-bold text-navy-900 mb-2">Student-Centric</h3>
							<p className="text-gray-600">Designed to make discovering and applying to internships simple and effective.</p>
						</div>
						<div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg">
							<h3 className="text-2xl font-bold text-navy-900 mb-2">Nationwide Opportunities</h3>
							<p className="text-gray-600">Explore roles across multiple sectors and leading organizations.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About


