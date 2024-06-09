import React from 'react';
import './bree.css';

const Flower = ({ position, rotation }) => (
	<div
		style={{
			position: 'absolute',
			top: 0,
			[position]: 0,
			height: '250px',
			width: '100px',
			backgroundImage: `url(bree3.jpg)` /* Replace with your flower image URL */,
			backgroundRepeat: 'repeat-y',
			backgroundSize: 'contain',
			transform: `rotateY(${rotation})`,
		}}
	/>
);

const CongratsMessage = () => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			height: '250px',
			maxHeight: '250px',
			overflow: 'hidden' /* Ensures content fits within 250px */,
			padding: '20px' /* Add some padding for better visuals */,
		}}
	>
		<p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
			Congratulations Mr. and Ms. Dinsmore!
		</p>
		<p>I hope you both continue to have an amazing life together.</p>
		<p>Thank you John for being such an awesome instructor. - Love Breeanna</p>
	</div>
);

const Bree = () => (
	<div
		style={{
			position: 'relative',
			backgroundColor: '#0187c6',
			borderRadius: '25px',
		}}
	>
		<Flower position='left' rotation='0deg' />
		<CongratsMessage />
		<Flower position='right' rotation='180deg' />
	</div>
);

export default Bree;
