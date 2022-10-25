import React from 'react';
import Avatar from './Avatar';
// import Details from './Details';

function Card2(props) {
	return (
		<div className='card'>
			<div className='top'>
				<h2 className='name'>{props.title}</h2>
				<Avatar img={props.img} />
			</div>
			<div className='bottom'>
				<h2 className='name'>{props.content}</h2>
			</div>
		</div>
	);
}
export default Card2;
