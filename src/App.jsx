import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/login.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
<<<<<<< HEAD
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
=======
import YouthRegistration from './pages/YouthRegistration.jsx'
>>>>>>> 7c5a4f3 (Updated)

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}> 
					<Route index element={<Home />} />
					<Route path="explore" element={<Explore />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="login" element={<Login />} />
					<Route path="youth-registration" element={<YouthRegistration />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
