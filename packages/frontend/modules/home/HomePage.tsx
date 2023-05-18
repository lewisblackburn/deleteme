import {Card} from '@components/Card';
import {Icon} from '@components/Icon';
import {Loading} from '@components/Loading';
import {Poster} from '@components/Poster';
import {Layout} from '@modules/layouts/Layout';
import {SortOrder, useMoviesQuery, usePeopleQuery} from 'generated/graphql';
import Link from 'next/link';
import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';

export const HomePage: React.FC = () => {
	const {data: movies} = useMoviesQuery({
		fetchPolicy: 'no-cache', // Necessary to avoid caching issues with /movies page when using infinite scroll etc...
		variables: {
			orderBy: {
				createdAt: SortOrder.Asc, // Only for video
			},
			take: 5,
		},
	});

	const {data: people} = usePeopleQuery({
		fetchPolicy: 'no-cache',
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
			take: 5,
		},
	});

	if (!movies?.movies || !people?.people) return <Loading />;

	return (
		<Layout>
			<section>
				<div className="container px-4 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
							Movies
						</span>
					</div>
					<div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
						{/* Due to apollo caching it means that if 20 movies have been loaded from the path
						 /movies it will render them here but I only won't the first five, so instead of fetching with the
						  no-cache parameter which would be a wastful query I just render the first fiive from cache
						*/}
						{movies?.movies?.slice(0, 5).map(movie => (
							<Link key={movie.id} href={`/movie/${movie.id}` ?? 0}>
								<a data-tooltip-id="tooltip" data-tooltip-content={movie.title} className="text-center">
									<Poster src={movie.poster} />
								</a>
							</Link>
						))}
						<Link href="/movies">
							<a data-tooltip-id="tooltip" data-tooltip-content="Show More">
								<Card>
									<Icon icon={AiOutlineArrowRight} className="w-6 h-6" />
								</Card>
							</a>
						</Link>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container px-4 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
							People
						</span>
					</div>
					<div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
						{people?.people?.slice(0, 5).map(person => (
							<Link key={person.id} href={`/person/${person.id}` ?? 0}>
								<a data-tooltip-id="tooltip" data-tooltip-content={person.name} className="text-center">
									<Poster src={person.poster} />
								</a>
							</Link>
						))}
						<Link href="/people">
							<a data-tooltip-id="tooltip" data-tooltip-content="Show More">
								<Card>
									<Icon icon={AiOutlineArrowRight} className="w-6 h-6" />
								</Card>
							</a>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
};
