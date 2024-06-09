import React from 'react';

const Royce = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '250px',
				maxHeight: '250px',
				padding: '20px',
				fontSize: '1.4rem',
				fontFamily: 'sans-serif',
				fontWeight: '400',
				lineHeight: '1.6',
				background: 'linear-gradient(to right, #dcedc8, #c7f0b3)', // Green gradient
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
				borderRadius: '10px',
				textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
				color: 'blackA',
			}}
		>
			<p>
				They say marriage is "game over" but really it's the start of the game.
				It's life with your best friend forever. Enjoy it all and
				congratulations!
			</p>
			<p>-Royce</p>
		</div>
	);
};

export default Royce;
