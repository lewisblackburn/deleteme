import Link from 'next/link';
import React from 'react';
import {IconType} from 'react-icons';
import {Icon} from './Icon';

interface IconLinkProps {
	icon: IconType;
	onClick?: () => void;
	href?: string;
	className?: string;
}

export const IconLink: React.FC<IconLinkProps> = ({icon, onClick, href, className}) => {
	return (
		<Link href={href ?? '#'}>
			<a data-tooltip-id="tooltip" data-tooltip-content={href && `Go to ${href}`} onClick={onClick}>
				<Icon icon={icon} className={className} />
			</a>
		</Link>
	);
};
