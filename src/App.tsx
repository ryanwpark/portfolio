import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/projects' element={<ProjectsPage />} />
			</Routes>
		</Router>
	);
};

export default App;
