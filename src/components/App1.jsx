import React from 'react';
import Card from './Card';
import contacts from './contacts';

function App1() {
	return (
		<div>
			<h1 className='heading'>My contacts</h1>
			{contacts.map((contact) => (
				<Card
					name={contact.name}
					img={contact.img}
					tel={contact.tel}
					email={contact.email}
				/>
			))}
		</div>
	);
}
export default App1;
