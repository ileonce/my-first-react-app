import React, { useState } from 'react';
import InputArea from './components/InputArea';
import ToDoList from './components/ToDoList';

function App6() {
	const [items, setItems] = useState([]);

	function addItems(inputText) {
		setItems((prevItems) => {
			return [...prevItems, inputText];
		});
	}

	function deleteItems(id) {
		setItems((prevItems) => {
			return prevItems.filter((items, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<div>
				<h1>My to Do-List</h1>
			</div>
			<div>
				<InputArea onAdd={addItems} />
			</div>
			<div>
				<ul>
					{items.map((todoItem, index) => (
						<ToDoList
							text={todoItem}
							key={index}
							id={index}
							onChecked={deleteItems}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App6;
