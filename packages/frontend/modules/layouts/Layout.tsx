import {Navbar} from '@components/Navbar';
import {motion} from 'framer-motion';
import React from 'react';

const pageVariants = {
	initial: {
		y: -100,
		opacity: 0,
	},
	in: {
		y: 0,
		opacity: 1,
	},
	out: {
		y: -100,
		opacity: 0,
	},
};
const pageTransition = {
	type: 'tween',
	ease: 'anticipate',
	duration: 0.4,
};

export const Layout: React.FC = ({children}) => (
	<div className="flex flex-col space-y-10">
		<Navbar />
		<motion.div
			className="px-10"
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			{children}
		</motion.div>
	</div>
);
