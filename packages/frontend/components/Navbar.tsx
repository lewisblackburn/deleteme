import {useMeQuery} from 'generated/graphql';
import Link from 'next/link';
import React from 'react';
import {AiOutlineBell, AiOutlineFire, AiOutlinePlus, AiOutlineSetting} from 'react-icons/ai';
import {Button} from './Button';
import {Icon} from './Icon';
import {IconLink} from './IconLink';

export const Navbar: React.FC = () => {
	const {data: me} = useMeQuery();

	return (
		<nav className="border-b">
			<div className="flex items-center justify-between container mx-auto p-5">
				<div className="flex space-x-2 md:space-x-5">
					<Link href="/home">
						<a className="flex space-x-1 p-3 text-sm text-gray-600 hover:text-gray-700 hover:bg-blueGray-100 font-semibold leading-none border border-bray-200 hover:border-gray-300 rounded">
							<h1>Home</h1>
						</a>
					</Link>
					<Link href="/movie/create">
						<a
							data-tooltip-id="tooltip"
							data-tooltip-content="Create Movie"
							className="flex space-x-1 p-3 text-sm text-gray-600 hover:text-gray-700 hover:bg-blueGray-100 font-semibold leading-none border border-bray-200 hover:border-gray-300 rounded"
						>
							<h1>Movie</h1>
							<Icon icon={AiOutlinePlus} />
						</a>
					</Link>
					<Link href="/person/create">
						<a
							data-tooltip-id="tooltip"
							data-tooltip-content="Create Person"
							className="flex space-x-1 p-3 text-sm text-gray-600 hover:text-gray-700 hover:bg-blueGray-100 font-semibold leading-none border border-bray-200 hover:border-gray-300 rounded"
						>
							<h1>Person</h1>
							<Icon icon={AiOutlinePlus} />
						</a>
					</Link>
				</div>
				<div className="flex items-center space-x-2 sm:space-x-5">
					{me?.me && !me?.me?.confirmed && (
						<Link href="/preferences/verify">
							<Button variant="tertiary" className="flex items-center space-x-2">
								<Icon icon={AiOutlineFire} className="w-4 h-4" />
								<span>Verify Account</span>
							</Button>
						</Link>
					)}
					<IconLink href="/preferences" icon={AiOutlineSetting} className="w-5 h-5" />
					<IconLink icon={AiOutlineBell} className="w-5 h-5 hidden sm:block" />
					{/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
					<Link href={`/user/${me?.me?.username}`}>
						<a data-tooltip-id="tooltip" data-tooltip-content="Profile">
							<img
								src={me?.me?.avatar ?? 'https://placehold.co/256'}
								className="w-10 h-10 rounded-full"
							/>
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};
