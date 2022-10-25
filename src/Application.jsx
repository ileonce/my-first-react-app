import React from 'react';
import Form from './components/Form';

var userIsRegistered = true;

function Application() {
	return (
		<div className='container'>
			<Form isRegistered={userIsRegistered} />
		</div>
	);
}

export default Application;
