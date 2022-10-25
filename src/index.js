import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
	<div className='container'>
		<App />
	</div>,
);

// const container = document.getElementById('root');
// const root = createRoot(container);

// const [honda, tesla] = cars;

// const {
// 	speedStatus: { topSpeed: hondaTopSpeed },
// } = honda;
// const {
// 	speedStatus: { topSpeed: teslaTopSpeed },
// } = tesla;
// const {
// 	colourByPopularity: [hondaTopColour],
// } = honda;
// const {
// 	colourByPopularity: [teslaTopColour],
// } = tesla;
// root.render(
// 	<table>
// 		<tr>
// 			<th>Brand</th>
// 			<th>Top Speed</th>
// 			<th>Top Colour</th>
// 		</tr>
// 		<tr>
// 			<td>{tesla.model}</td>
// 			<td>{teslaTopSpeed}</td>
// 			<td>{teslaTopColour}</td>
// 		</tr>
// 		<tr>
// 			<td>{honda.model}</td>
// 			<td>{hondaTopSpeed}</td>
// 			<td>{hondaTopColour}</td>
// 		</tr>
// 	</table>,
// );
