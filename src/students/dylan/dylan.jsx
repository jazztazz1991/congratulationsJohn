import { gsap } from 'gsap';
import './dylan.css';
import { useRef } from 'react';
import cake from './cake.jpg';

function Dylan() {
	const clocheRef = useRef(null);
	const cakeRef = useRef(null);
	const messageRef = useRef(null);

	const handleClick = () => {
		gsap.to(clocheRef.current, {
			y: -200,
			duration: 1,
			ease: 'power2.inOut',
		});
		gsap.to(cakeRef.current, {
			opacity: 1,
			delay: 1,
			duration: 1,
			ease: 'power2.inOut',
		});
		gsap.to(messageRef.current, {
			opacity: 1,
			delay: 2,
			duration: 1,
			ease: 'power2.inOut',
		});
	};

	const handleClose = () => {
		// todo- add close animation
	};

	return (
		<div className='dylan'>
			<div className='cloche-container' onClick={handleClick}>
				<div className='cloche' ref={clocheRef}>
					<h2>
						Congratulations John! We know you've stressed the importance of
						cookies in class, but in honor of the occasion...
					</h2>
					<h3>Click here</h3>
				</div>
				<div className='cake' ref={cakeRef} onClick={handleClose}>
					<img src={cake} alt='cake' />
					<h2>
						Tradition says you should have a few Bytes of cake instead! You've
						been an awesome teacher, congrats again on this next great chapter
						of your life. -Dylan
					</h2>
				</div>
			</div>
		</div>
	);
}

export default Dylan;
