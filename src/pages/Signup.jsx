import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
	const navigate = useNavigate()
	const [form, setForm] = useState({ name: '', email: '', password: '' })
	const [showPassword, setShowPassword] = useState(false)

	function handleChange(e) {
		const { name, value } = e.target
		setForm(prev => ({ ...prev, [name]: value }))
	}

	function handleSubmit(e) {
		e.preventDefault()
		// TODO: Integrate real auth
		navigate('/dashboard')
	}

	return (
		<section className="container-px py-12">
			<div className="mx-auto max-w-md">
				<h1 className="text-2xl font-bold mb-6">Create your account</h1>
				<form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
						<input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="input" placeholder="Ada Lovelace" />
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
						<input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="input" placeholder="you@example.com" />
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
						<div className="relative">
							<input id="password" name="password" type={showPassword ? 'text' : 'password'} required value={form.password} onChange={handleChange} className="input pr-10" placeholder="Create a strong password" />
							<button type="button" aria-label="Toggle password" onClick={() => setShowPassword(v => !v)} className="absolute inset-y-0 right-2 my-auto px-2 text-gray-500 hover:text-gray-700">
								{showPassword ? 'Hide' : 'Show'}
							</button>
						</div>
					</div>
					<button type="submit" className="btn-primary w-full">Create account</button>
					<p className="text-sm text-center text-gray-600">Already have an account? <Link to="/login" className="text-primary hover:underline">Log in</Link></p>
				</form>
			</div>
		</section>
	)
}

export default Signup
