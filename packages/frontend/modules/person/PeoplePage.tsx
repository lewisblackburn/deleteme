import {Grid} from '@components/Grid';
import {Poster} from '@components/Poster';
import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {Layout} from '@modules/layouts/Layout';
import {SortOrder, usePeopleQuery} from 'generated/graphql';
import {limit} from 'lib/constants';
import Link from 'next/link';
import React, {useCallback, useEffect} from 'react';

export const PeoplePage: React.FC = () => {
	useVerifyLoggedIn();

	const {data, fetchMore} = usePeopleQuery({
		variables: {
			orderBy: {
				id: SortOrder.Desc,
			},
		},
	});

	const handleScroll = useCallback(() => {
		// @ts-expect-error this is a hack to get last element in the list
		// eslint-disable-next-line no-unsafe-optional-chaining
		const lastPersonInResults = data?.people[data?.people?.length - 1];
		const cursor = lastPersonInResults?.id;

		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			fetchMore({
				variables: {
					take: limit,
					skip: 1, // Skip the cursor
					cursor: {
						id: cursor,
					},
				},
			}).catch(e => console.log(e));
		}
	}, [data?.people, fetchMore]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	return (
		<Layout>
			<section className="pb-20">
				<div className="container px-4 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
							Persons
						</span>
					</div>
					<div className="flex flex-col space-y-5">
						<Grid>
							{data?.people?.map(person => (
								<Link key={person.id} href={`/person/${person.id}` ?? -1}>
									<a data-tooltip-id="tooltip" data-tooltip-content={person.name}>
										<Poster src={person.poster} />
									</a>
								</Link>
							))}
						</Grid>
					</div>
				</div>
			</section>
		</Layout>
	);
};
