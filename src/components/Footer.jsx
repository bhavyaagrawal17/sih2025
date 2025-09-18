function Footer() {
	return (
		<footer className="border-t border-gray-200 bg-white">
			<div className="container-px mx-auto py-10">
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
					<div>
						<div className="flex items-center gap-2">
							<div className="h-6 w-6 rounded-md bg-primary"></div>
							<span className="font-semibold">AI Internship Matcher (SIH 2025)</span>
						</div>
						<p className="mt-2 text-sm text-gray-600">Powered by AI Internship Matcher (SIH 2025)</p>
					</div>
					<nav className="flex gap-6 text-sm text-gray-600">
						<a href="#" className="hover:text-gray-900">Privacy Policy</a>
						<a href="#" className="hover:text-gray-900">Terms</a>
						<a href="#" className="hover:text-gray-900">Help</a>
					</nav>
					<div className="flex gap-4">
						<a href="#" aria-label="Twitter" className="text-gray-600 hover:text-primary">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646A4.118 4.118 0 0 0 21.448 4.1a8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.106 4.106 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84"/></svg>
						</a>
						<a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-primary">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-10h3v1.622c1.396-2.586 7-2.777 7 2.476v5.902z"/></svg>
						</a>
					</div>
				</div>
				<p className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} SIH 2025 Internship Matcher. All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer


