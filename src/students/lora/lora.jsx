import React, { useState } from 'react';
import Die from './die';

const photos = [
	// Replace with URLs of your 6 die side images
	'/src/students/lora/images/starryheart.jpg',
	'/src/students/lora/images/bulldog_ceremony.gif',
	'/src/students/lora/images/heart_in_the_clouds.jpg',
	'/src/students/lora/images/download_12.jpg',
	'/src/students/lora/images/weddingcake_elegant.jpg',
	'/src/students/lora/images/starryheart.jpg',
];

function Lora() {
	return (
		<div className='justify-center align-center'>
			<Die className='mx-auto w-50' photos={photos} />
			<h2>Congratulations John & Angel!</h2>
			<p>Lora</p>
		</div>
	);
}

export default Lora;
