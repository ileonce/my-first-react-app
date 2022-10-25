import React, { useState } from 'react';

function CreateArea(props) {
	const [inputText, setInputText] = useState({
		title: '',
		content: '',
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setInputText((prevNote) => {
			return { ...prevNote, [name]: value };
		});
	}

	function submitNote(event) {
		props.onAdd(inputText);
		setInputText({
			title: '',
			content: '',
		});
		event.preventDefault();
	}

	return (
		<div className='note'>
			<form>
				<input
					name='title'
					onChange={handleChange}
					placeholder='Title'
					value={inputText.title}
					required='required'
				/>
				<textarea
					name='content'
					onChange={handleChange}
					placeholder='Take a Note'
					value={inputText.content}
					required='required'
				/>
				<button onClick={submitNote}>Add</button>
			</form>
		</div>
	);
}

export default CreateArea;
