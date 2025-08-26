import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar: React.FC = () => (
	<nav className='apple-navbar'>
		<Link className='apple-navlink' to='/'>
			Home
		</Link>
		<Link className='apple-navlink' to='/login'>
			Login
		</Link>
		<Link className='apple-navlink' to='/register'>
			Register
		</Link>
	</nav>
);

export default NavBar;
