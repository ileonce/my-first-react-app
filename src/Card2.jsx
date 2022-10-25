import React from 'react';

function Card2(props) {
	return (
		<div className='terms'>
			<dt>
				<span
					className='emoji'
					role='img'
					aria-label='tense biceps'
				>
					{props.emoji}
				</span>
				<span>{props.name}</span>
			</dt>
			<dd>{props.description}</dd>
		</div>
	);
}

export default Card2;
