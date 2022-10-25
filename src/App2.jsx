import React from 'react';
import Card2 from './Card2';
import Information from './Information';

console.log(Information);

function createInfo(information) {
	return (
		<Card2
			key={information.id}
			emoji={information.emoji}
			name={information.name}
			description={information.description}
		/>
	);
}

function App2() {
	return (
		<div>
			<h1 className='heading'>EmojiPedia</h1>
			<dl className='dictionary'>{Information.map(createInfo)}</dl>
		</div>
	);
}

export default App2;
