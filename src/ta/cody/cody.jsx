import React from 'react';
import ReactDOM from 'react-dom/client';
import confetti from 'canvas-confetti';
import './cody.css';

function Cody() {
	const handleClick = () => {
		confetti({
			particleCount: 100,
			angle: 60,
			spread: 360,
			colors: ['#f00', '#ff0', '#00f'],
		});
	};

	return (
		<div className='congrats-container' onClick={handleClick}>
			<h2 className='congrats-text'>Congratulations, John & Angel!</h2>
			<p>Thank you for being an amazing teacher!</p>
			<p>- Cody Chase</p>
			<p><span>PS: Click Me</span></p>
			<div className='confetti-wrapper' />
		</div>
	);
}

export default Cody;
