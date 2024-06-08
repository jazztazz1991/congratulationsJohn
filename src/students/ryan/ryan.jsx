import React, { useRef, useEffect } from 'react';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import * as THREE from 'three';

const Ryan = () => {
	const canvasRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container) return;

		canvas.width = 1216;
		canvas.height = 250;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			canvas.width / canvas.height,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			antialias: true,
		});

		const cube = new THREE.Mesh(
			new THREE.BoxGeometry(1, 1, 1),
			new THREE.MeshBasicMaterial({ color: 0x6897bb })
		);
		scene.add(cube);

		const text = 'Congratulations John';
		const loader = new FontLoader();
		loader.load(
			'https://threejs.org/examples/fonts/gentilis_regular.typeface.json',
			(font) => {
				const geometry = new THREE.TextGeometry(text, {
					font: font,
					size: 1,
					height: 0.2,
				});
				const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
				const sprite = new THREE.Mesh(geometry, material);
				sprite.position.x = -6;
				sprite.position.y = 2;
				sprite.position.z = -1;
				scene.add(sprite);
			}
		);

		const ryanText = '~Ryan';
		const ryanLoader = new FontLoader();
		loader.load(
			'https://threejs.org/examples/fonts/gentilis_regular.typeface.json',
			(font) => {
				const ryanGeometry = new THREE.TextGeometry(ryanText, {
					font: font,
					size: 1,
					height: 0.2,
				});
				const ryanMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
				const ryanSprite = new THREE.Mesh(ryanGeometry, ryanMaterial);
				ryanSprite.position.x = -2;
				ryanSprite.position.y = -3;
				ryanSprite.position.z = -1;
				scene.add(ryanSprite);
			}
		);

		camera.position.z = 4;
		renderer.setSize(canvas.width, canvas.height);
		renderer.setClearColor(0x242424, 1);
		renderer.render(scene, camera);

		function animate() {
			requestAnimationFrame(animate);
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render(scene, camera);
		}

		animate();
	}, [canvasRef, containerRef]);

	return (
		<div
			ref={containerRef}
			style={{
				width: '100%',
				height: '250px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<canvas ref={canvasRef} />
		</div>
	);
};

export default Ryan;
