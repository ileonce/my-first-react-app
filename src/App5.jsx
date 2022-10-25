import React, { useState } from 'react';

function App5() {
	const [contact, setContact] = useState({
		fName: '',
		lName: '',
		email: '',
	});

	function handleChange(event) {
		const { value, name } = event.target;

		setContact((preValue) => {
			return {
				...preValue,
				[name]: value,
			};
		});
	}

	return (
		<div>
			<form>
				<h1>
					{' '}
					Hello {contact.fName}
					{contact.lName}
				</h1>
				<p>{contact.email}</p>
				<input
					name='fName'
					onChange={handleChange}
					placeholder='Enter First Name'
					value={contact.fName}
				/>
				<input
					name='lName'
					onChange={handleChange}
					placeholder='Enter Second Name'
					value={contact.lName}
				/>
				<input
					name='email'
					onChange={handleChange}
					placeholder='Enter your Email'
					value={contact.email}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default App5;
