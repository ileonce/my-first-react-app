import React from 'react';
import Input from './Input';

function Login() {
	return (
		<form>
			<div className='login-form'>
				<Input
					type='text'
					placeholder='Username'
				/>
				<Input
					type='password'
					placeholder='Password'
				/>
				<button type='Submit'>Login</button>
			</div>
		</form>
	);
}

export default Login;
