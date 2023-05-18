import {Button} from '@components/Button';
import {PreferencesLayout} from '@modules/layouts/PreferenceLayout';
import {useLikedMoviesQuery} from 'generated/graphql';
import Link from 'next/link';
import React from 'react';

export const LikedPage: React.FC = () => {
	const {data: movies} = useLikedMoviesQuery({
		fetchPolicy: 'no-cache',
	});

	return (
		<PreferencesLayout>
			<div className="flex flex-col space-y-10 w-full">
				<div className="flex flex-col space-y-2">
					{movies?.likedMovies?.map(movie => (
						<Link key={movie.movie.id} href={`/movie/${movie.movie.id}`}>
							<a>
								<Button variant="tertiary" className="flex w-full">
									{movie.movie.title}
								</Button>
							</a>
						</Link>
					))}
				</div>
			</div>
		</PreferencesLayout>
	);
};
