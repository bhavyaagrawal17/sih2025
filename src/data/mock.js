export const categories = ['Programming','Design','Electronics','Medical','Law','Business','Mechanical Eng.']

export const internships = Array.from({length:24}).map((_,i)=> ({
	id: i+1,
	title: i%2===0? 'Frontend Developer Intern' : 'Data Analyst Intern',
	company: i%3===0? 'TechCorp' : 'DataWorks',
	location: ['Remote','Delhi','Bengaluru','Mumbai'][i%4],
	duration: ['2 months','3 months','6 months'][i%3],
	stipend: ['₹5k','₹10k','₹15k'][i%3],
	mode: i%2===0? 'Remote':'On-site',
}))

export const recommendations = Array.from({length:9}).map((_,i)=> ({
	id: i+1,
	title: ['Frontend Developer','Backend Developer','Data Analyst'][i%3] + ' Intern',
	company: ['TechCorp','CloudNine','DataWorks'][i%3],
	location: ['Remote','Delhi','Bengaluru'][i%3],
	duration: ['3 months','6 months','2 months'][i%3],
	stipend: ['₹8k','₹12k','₹15k'][i%3],
}))


