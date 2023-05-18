import React from 'react';
import {AppProps} from 'next/app';
import '../styles/index.css';
import {PaletteProvider} from '@components/Palette/PaletteProvider';
import {Toaster} from 'react-hot-toast';
import 'react-tooltip/dist/react-tooltip.css';
import {Tooltip} from 'react-tooltip';

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Toaster position="top-right" />
			<Tooltip id="tooltip" />
			<PaletteProvider />
			<Component {...pageProps} />
		</>
	);
}
