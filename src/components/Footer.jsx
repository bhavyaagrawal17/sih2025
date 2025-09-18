function Footer() {
	return (
		<footer className="bg-orange-600 text-white py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="col-span-1 md:col-span-2">
						<h3 className="text-2xl font-bold mb-4">PM Internship Scheme</h3>
						<p className="text-orange-100 mb-6 max-w-md">
							Empowering India's youth through government-backed internship opportunities and real-world industry experience.
						</p>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2 text-orange-100">
							<li><a href="#" className="hover:text-white transition-colors">Home</a></li>
							<li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Login</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Register</a></li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Contact Info</h4>
						<ul className="space-y-2 text-orange-100">
							<li className="flex items-center gap-2">
								<span>support@pminternship.gov.in</span>
							</li>
							<li className="flex items-center gap-2">
								<span>1800-XXX-XXXX</span>
							</li>
							<li className="flex items-center gap-2">
								<span>New Delhi, India</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer


