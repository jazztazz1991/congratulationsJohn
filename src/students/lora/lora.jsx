import React from 'react';
import ReactDOM from 'react-dom/client';
import './lora.css';

function Lora() {
	const handleClick = () => {
		const cube3D = document.querySelector('.cube3D');
		cube3D.classList.toggle('show-1');
		cube3D.classList.toggle('show-2');
		cube3D.classList.toggle('show-3');
		cube3D.classList.toggle('show-4');
		cube3D.classList.toggle('show-5');
		cube3D.classList.toggle('show-6');
	};
	return (
		<div className='cube-container lora' onClick={handleClick}>
			<div className='cube initial-position'>
				<img
					className='cubeFaceImage1'
					src={'/src/students/lora/images/eatDrinkandbeMarried.jpg'}
				/>

				<img
					className='cubeFaceImage2'
					src={'/src/students/lora/images/bulldog_ceremony.gif'}
				/>

				<img
					className='cubeFaceImage3'
					src={'/src/students/lora/images/heart_in_the_clouds.jpg'}
				/>

				<img
					className='cubeFaceImage4'
					src={'/src/students/lora/images/download_12.jpg'}
				/>

				<img
					className='cubeFaceImage5'
					src={'/src/students/lora/images/weddingcake_elegant.jpg'}
				/>

				<img
					className='cubeFaceImage6'
					src={'/src/students/lora/images/starryheart.jpg'}
				/>
			</div>
		</div>
	);
}

export default Lora;
