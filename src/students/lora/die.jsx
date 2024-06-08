import React, { useState } from 'react';

const Die = ({ photos }) => {
	const [currentSide, setCurrentSide] = useState(0);

	const handleClick = () => {
		const randomSide = Math.floor(Math.random() * photos.length);
		setCurrentSide(randomSide);
	};

	const dieStyle = {
		width: '150px',
		height: '150px',
		backgroundImage: `url(${photos[currentSide]})`,
		backgroundSize: 'cover',
		cursor: 'pointer',
		marginLeft: 'auto',
		marginRight: 'auto',
	};

	return <div onClick={handleClick} style={dieStyle} />;
};

export default Die;
