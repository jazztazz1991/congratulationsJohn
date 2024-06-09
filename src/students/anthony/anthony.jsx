import React from 'react';
import ReactDOM from 'react-dom/client';
import './anthony.css';

function Anthony() {
	return (
		<div className='flex anthMain'>
			<div className='col-span-1 w-1/2 px-10 anthText'>
				<p>
					Congrats John! Thanks for being an amazing instructor. I wish you and
					your wife the best!
				</p>
				<h2>-Anthony</h2>
			</div>
			<div className='col-span-1 w-1/2 justify-center'>
				<img src='krusty.jpg' className='h-3/4 krusty'></img>
			</div>
		</div>
	);
}

export default Anthony;
