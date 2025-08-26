import React, { useState } from 'react';
import '../App.css';

const RegisterPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const handleRegister = (e: React.FormEvent) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setError('Passwords do not match');
			setSuccess('');
			return;
		}
		if (!email || !password) {
			setError('Please fill all fields');
			setSuccess('');
			return;
		}
		setError('');
		setSuccess('Registration successful!');
	};

	return (
		<div className='apple-minimal-container'>
			<h1 className='apple-title'>Register</h1>
			<form className='apple-form' onSubmit={handleRegister}>
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
				<input
					className='apple-input'
					type='password'
					placeholder='Confirm Password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>
				<button className='apple-button' type='submit'>
					Register
				</button>
				{error && <p className='apple-error'>{error}</p>}
				{success && <p className='apple-success'>{success}</p>}
			</form>
		</div>
	);
};

export default RegisterPage;
