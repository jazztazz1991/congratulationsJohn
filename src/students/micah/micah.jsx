import React, { useState, useEffect } from 'react';
import './micah.css';
import balloonSvg from './balloons-birthday-svgrepo-com.svg';
const Micah = () => {
	const [position, setPosition] = useState({
		x: window.innerWidth / 2,
		y: window.innerHeight / 2,
	});
	const [popped, setPopped] = useState(false);
	const [textVisible, setTextVisible] = useState(false);
	const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const updatePosition = () => {
			const minX = 200;
			const maxX = window.innerWidth - 200;
			const minY = 200;
			const maxY = window.innerHeight - 200;
			const x = Math.random() * window.innerWidth;
			const y = Math.random() * window.innerHeight;
			setPosition({ x, y });
		};
		const intervalId = setInterval(updatePosition, 2000); // Change position every 2 seconds
		return () => clearInterval(intervalId);
	}, []);
	const handleBalloonClick = (event) => {
		setClickPosition({ x: event.clientX, y: event.clientY });
		setPopped(true);
	};
	const handleTextClick = () => {
		setTextVisible(!textVisible);
		setPopped(false);
	};
	return (
		<div className='micah-div'>
			{!popped ? (
				<img
					src={balloonSvg}
					alt='Balloon'
					className='balloon'
					style={{ left: position.x, top: position.y }}
					onClick={handleBalloonClick}
					title='Click me!'
				/>
			) : (
				<div
					className='popup'
					style={{ left: clickPosition.x, top: clickPosition.y }}
					onClick={handleTextClick}
				>
					CONGRATS, MR & MRS DINSMORE!
					<img className='svg' src='/src/students/micah/Logo_face.png'></img>
					<br /> <br />
					<img className='svg' src='/src/students/micah/signature.png'></img>
				</div>
			)}
		</div>
	);
};
export default Micah;
