import React from 'react';

function Form(props) {
	return (
		<form>
			<div className='login-form'>
				<input
					type='text'
					placeholder='Username'
				/>
				<input
					type='password'
					placeholder='Password'
				/>
				{!props.isRegistered && (
					<input
						type='password'
						placeholder='Confirm Password'
					/>
				)}

				<button type='Submit'>
					{props.isRegistered ? 'Login' : 'Register'}
				</button>
			</div>
		</form>
	);
}

export default Form;
