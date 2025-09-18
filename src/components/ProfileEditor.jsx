import { useState } from 'react'

function ProfileEditor({ profile, onProfileChange, onAddSkill, onRemoveSkill, onResumeSelected, onSave, onCancel }) {
	const [skillInput, setSkillInput] = useState('')

	function handleFieldChange(e) {
		const { name, value } = e.target
		onProfileChange(name, value)
	}

	function handleAddSkill() {
		const trimmed = skillInput.trim()
		if (!trimmed) return
		onAddSkill(trimmed)
		setSkillInput('')
	}

	function handleResumeChange(e) {
		const file = e.target.files && e.target.files[0]
		if (!file) return
		onResumeSelected(file)
	}

	return (
		<div className="card p-5">
			<h3 className="section-title mb-4">Edit Profile</h3>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label className="label" htmlFor="name">Full Name</label>
					<input id="name" name="name" className="input" value={profile.name || ''} onChange={handleFieldChange} placeholder="Student Name" />
				</div>
				<div>
					<label className="label" htmlFor="headline">Headline</label>
					<input id="headline" name="headline" className="input" value={profile.headline || ''} onChange={handleFieldChange} placeholder="e.g., ML Enthusiast | Frontend Developer" />
				</div>
				<div>
					<label className="label" htmlFor="email">Email</label>
					<input id="email" name="email" type="email" className="input" value={profile.email || ''} onChange={handleFieldChange} placeholder="you@example.com" />
				</div>
				<div>
					<label className="label" htmlFor="phone">Phone</label>
					<input id="phone" name="phone" className="input" value={profile.phone || ''} onChange={handleFieldChange} placeholder="+91 99999 99999" />
				</div>
				<div>
					<label className="label" htmlFor="location">Location</label>
					<input id="location" name="location" className="input" value={profile.location || ''} onChange={handleFieldChange} placeholder="City, Country" />
				</div>
				<div>
					<label className="label" htmlFor="portfolio">Portfolio URL</label>
					<input id="portfolio" name="portfolio" className="input" value={profile.portfolio || ''} onChange={handleFieldChange} placeholder="https://..." />
				</div>
				<div>
					<label className="label" htmlFor="linkedin">LinkedIn</label>
					<input id="linkedin" name="linkedin" className="input" value={profile.linkedin || ''} onChange={handleFieldChange} placeholder="https://linkedin.com/in/..." />
				</div>
				<div>
					<label className="label" htmlFor="github">GitHub</label>
					<input id="github" name="github" className="input" value={profile.github || ''} onChange={handleFieldChange} placeholder="https://github.com/username" />
				</div>
			</div>

			<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
				<div>
					<label className="label" htmlFor="degree">Degree</label>
					<input id="degree" name="degree" className="input" value={profile.degree || ''} onChange={handleFieldChange} placeholder="B.Tech, B.Sc..." />
				</div>
				<div>
					<label className="label" htmlFor="college">College</label>
					<input id="college" name="college" className="input" value={profile.college || ''} onChange={handleFieldChange} placeholder="Institute name" />
				</div>
				<div>
					<label className="label" htmlFor="gradYear">Graduation Year</label>
					<input id="gradYear" name="gradYear" className="input" value={profile.gradYear || ''} onChange={handleFieldChange} placeholder="2026" />
				</div>
			</div>

			<div className="mt-4">
				<label className="label" htmlFor="about">About</label>
				<textarea id="about" name="about" rows={4} className="textarea" value={profile.about || ''} onChange={handleFieldChange} placeholder="Short bio, interests, goals..." />
			</div>

			<div className="mt-4">
				<label className="label">Skills</label>
				<div className="flex gap-2">
					<input className="input flex-1" value={skillInput} onChange={e=>setSkillInput(e.target.value)} placeholder="Add a skill and press Add" />
					<button type="button" className="btn-outline" onClick={handleAddSkill}>Add</button>
				</div>
				<div className="mt-2 flex flex-wrap gap-2">
					{(profile.skills || []).map(skill => (
						<button key={skill} type="button" onClick={()=>onRemoveSkill(skill)} className="px-2 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm hover:bg-gray-200">
							{skill}
						</button>
					))}
				</div>
			</div>

			<div className="mt-4">
				<label className="label" htmlFor="resume">Resume (PDF)</label>
				<input id="resume" type="file" accept="application/pdf" onChange={handleResumeChange} className="block w-full text-sm text-gray-700" />
				{profile.resumeName && (
					<p className="text-sm text-gray-600 mt-1">Selected: {profile.resumeName}</p>
				)}
			</div>

			<div className="mt-6 flex justify-end gap-3">
				{onCancel && <button type="button" className="btn-outline" onClick={onCancel}>Cancel</button>}
				<button type="button" className="btn-primary" onClick={onSave}>Save Profile</button>
			</div>
		</div>
	)
}

export default ProfileEditor