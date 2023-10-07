'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

// https://github.com/shuding/cobe

export function Cobe() {
	const canvasRef = useRef(null);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- Just following orders from Cobe.
		if (!canvasRef.current) return;
		let phi = 0;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: 600 * 2,
			height: 600 * 2,
			phi: 0,
			theta: 0,
			dark: 1,
			opacity: 0.4,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			baseColor: [0.2, 0.2, 0.2],
			markerColor: [0.1, 0.8, 1],
			glowColor: [0.5, 0.5, 0.5],
			markers: [],
			onRender: (state) => {
				state.phi = phi;
				phi += 0.0005;
			},
		});

		return () => {
			globe.destroy();
		};
	}, []);

	return (
		<div className="absolute lg:relative">
			<canvas
				ref={canvasRef}
				style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
			/>
		</div>
	);
}
