import React, { useState, useEffect } from 'react';

const AnimatedFlower = ({ color }) => {
	const [flowerScale, setFlowerScale] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setFlowerScale((scale) => (scale === 1 ? 0.8 : 1));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const flowerStyle = {
		transform: `scale(${flowerScale})`,
	};

	return (
		<div
			className='flower'
			style={{ backgroundColor: color, maxHeight: '250px' }}
		>
			<div className='stem'></div>
			<div className='petal1' style={flowerStyle}></div>
			<div className='petal2' style={flowerStyle}></div>
			<div className='petal3' style={flowerStyle}></div>
			<div className='center'></div>
		</div>
	);
};

const Bree = () => {
	return (
		<div className='congratulations' style={{ maxHeight: '250px' }}>
			<AnimatedFlower color='pink' />
			<div className='message-container'>
				<p>Congratulations Mr. and Ms. Dinsmore (last name unsure)!</p>
				<p>I hope you both continue to have an amazing life together.</p>
				<p>
					Thank you John for being such an awesome instructor. - love Breeanna
				</p>
			</div>
			<AnimatedFlower color='blue' />
		</div>
	);
};

export default Bree;
