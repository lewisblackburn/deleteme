import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {useGetStringId} from 'hooks/useGetStringId';
import React from 'react';
import {useUserQuery} from '../../generated/graphql';
import {Layout} from '../layouts/Layout';

export const UserPage: React.FC = () => {
	useVerifyLoggedIn();
	const username: string = useGetStringId();

	const {data} = useUserQuery({
		variables: {
			username,
		},
	});

	return (
		<Layout>
			<div className="flex flex-col space-y-5 border p-5 rounded">
				<div className="flex items-start justify-between">
					<img src={data?.user?.avatar ?? 'https://placehold.co/256'} className="rounded-full w-16 h-16" />
				</div>
				<div>
					<h1>{data?.user?.displayname}</h1>
					<h2>@{data?.user?.username}</h2>
				</div>
				<p>{data?.user?.bio}</p>
			</div>
		</Layout>
	);
};
