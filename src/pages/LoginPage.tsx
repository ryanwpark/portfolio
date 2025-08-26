import React, { useState } from 'react';
import '../App.css';

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		// Simple local state authentication
		if (email === 'user@example.com' && password === 'password') {
			setError('');
			alert('Login successful!');
		} else {
			setError('Invalid credentials');
		}
	};

	return (
		<div className='apple-minimal-container'>
			<h1 className='apple-title'>Login</h1>
			<form className='apple-form' onSubmit={handleLogin}>
				<input
					className='apple-input'
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					className='apple-input'
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button className='apple-button' type='submit'>
					Login
				</button>
				{error && <p className='apple-error'>{error}</p>}
			</form>
		</div>
	);
};

export default LoginPage;
