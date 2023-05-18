import {Backdrop} from '@components/Backdrop';
import {Button} from '@components/Button';
import {Icon} from '@components/Icon';
import {IconButton} from '@components/IconButton';
import {ReviewMovieModal} from '@components/Modal/ReviewMovieModal';
import {notify} from '@components/Notify';
import {Poster} from '@components/Poster';
import {MovieDocument, useLikeMovieMutation, useUnlikeMovieMutation, useMovieQuery} from 'generated/graphql';
import {useGetIntId} from 'hooks/useGetIntId';
import {floatToTime} from 'lib/floatToTime';
import Link from 'next/link';
import React, {useState} from 'react';
import {
	AiFillHeart,
	AiFillStar,
	AiOutlineCheckCircle,
	AiOutlineEdit,
	AiOutlineHeart,
	AiOutlineHourglass,
	AiOutlineStar,
} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const MoviePage: React.FC = () => {
	useVerifyLoggedIn();

	const movieId: number = useGetIntId();
	const {data} = useMovieQuery({
		skip: movieId === -1,
		variables: {
			movieId,
		},
	});

	const [likeMovie] = useLikeMovieMutation({
		variables: {
			data: {
				movie: {
					connect: {
						id: movieId,
					},
				},
			},
		},
		refetchQueries: [MovieDocument],
	});

	const [unlikeMovie] = useUnlikeMovieMutation({
		variables: {
			movieId,
		},
		refetchQueries: [MovieDocument],
	});

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<ReviewMovieModal isOpen={isOpen} setIsOpen={setIsOpen} movieId={movieId} />
			<Layout>
				<div className="container px-4 mx-auto">
					<div className="max-w-2xl mx-auto mb-6">
						<div className="flex flex-col items-center text-center mb-6">
							<h2 className="text-2xl md:text-4xl my-2 font-bold font-heading">{data?.movie?.title}</h2>
							<div className="flex space-x-5">
								<IconButton
									icon={data?.movie?.isLiked ? AiFillHeart : AiOutlineHeart}
									className={data?.movie?.isLiked ? 'text-red-500' : ''}
									onClick={() => {
										likeMovie()
											.then(() => {
												notify('success', 'mutation', 'Liked movie');
											})
											.catch(() => {
												unlikeMovie()
													.then(() => {
														notify('success', 'mutation', 'Unliked movie');
													})
													.catch(() => {
														notify(
															'error',
															'mutation',
															'Failed to either like or unlike movie'
														);
													});
											});
									}}
								/>
								<IconButton
									icon={data?.movie?.isRated ? AiFillStar : AiOutlineStar}
									className={data?.movie?.isRated ? 'text-yellow-500' : ''}
									onClick={() => setIsOpen(prev => !prev)}
								/>
								<Link href={`/movie/edit/${movieId}`}>
									<a>
										<IconButton icon={AiOutlineEdit} />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex max-w-5xl mx-auto mb-8">
						<Backdrop src={data?.movie?.backdrop} />
					</div>
					<div className="max-w-2xl mx-auto mb-6">
						<div className="text-center">
							<span className="text-xs text-gray-500 font-semibold">
								{data?.movie?.genres.map(genre => genre.name).join(' / ')}
							</span>
						</div>
					</div>
					<div className="max-w-2xl mx-auto">
						<p className="mb-6 leading-loose text-blueGray-400">{data?.movie?.tagline}</p>
						<p className="mb-6 leading-loose text-blueGray-400">{data?.movie?.overview}</p>
					</div>
				</div>
				<section className="py-8">
					<div className="container px-4 mx-auto">
						<div className="flex flex-wrap justify-between">
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineStar} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{data?.movie?.aggregateMovieReview._avg?.rating ?? 0}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">Avg. Rating</p>
								</div>
							</div>
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineHourglass} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{floatToTime(data?.movie?.runtime ?? 0)}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">Runtime</p>
								</div>
							</div>
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineCheckCircle} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{new Date(data?.movie?.released).toLocaleDateString('en-gb', {
											year: 'numeric',
										}) ?? 0}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">Released</p>
								</div>
							</div>
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineHeart} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{data?.movie?._count?.likes ?? 0}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">Likes</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="pt-20">
					<div className="container px-4 mx-auto text-center">
						<div className="max-w-lg mx-auto mb-12">
							<span className="inline-block py-1 px-3 mb-4 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
								The Cast
							</span>
							<p className="text-blueGray-400 leading-loose mt-2 ">
								This will only include the major cast, not the extras i.e the crew, etc.
							</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
							{data?.movie?.actors.map(actor => (
								<div key={actor.person.id} className="flex flex-col items-center">
									<Link href={`/person/${actor.person.id}`}>
										<a>
											<Poster src={actor.person.poster} />
										</a>
									</Link>
									<p className="mt-6 text-xl">{actor.person.name}</p>
									<p className="mt-2 mb-4 text-blue-600">{actor.role}</p>
								</div>
							))}
						</div>
					</div>
					{data?.movie?.actors.length === 0 && (
						<div className="text-center">
							<a
								className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
								href="#"
							>
								No actors
							</a>
						</div>
					)}
				</section>
				<section className="py-20">
					<div className="container px-4 mx-auto">
						<div className="max-w-lg mx-auto mb-12 text-center">
							<img className="mx-auto" src="/quote.svg" alt="" />
							<h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">Reviews</h2>
							<p className="text-blueGray-400 leading-loose">
								This will only include the first eight most recent reviews.
							</p>
						</div>
						<div className="flex flex-wrap max-w-5xl mx-auto mb-6">
							{data?.movie?.reviews.map(review => (
								<Link key={review.user.username} href={`/reviews/movie/${movieId}`}>
									<a className="w-full px-3 mb-6">
										<div className="p-8 bg-white shadow rounded">
											<div className="flex items-center justify-between mb-4">
												<div className="flex items-center">
													<img
														className="h-16 w-16 rounded-full object-cover"
														src={review.user.avatar}
														alt=""
													/>
													<div className="pl-4">
														<p className="text-xl">{review.user.username}</p>
														<p className="text-blue-600">{review.rating} / 5</p>
													</div>
												</div>
											</div>
											<p className="leading-loose text-blueGray-400">{review.review}</p>
										</div>
									</a>
								</Link>
							))}
						</div>
						<div className="text-center">
							<Link href={`/reviews/movie/${movieId}`}>
								<a>
									<Button>{data?.movie?.reviews.length === 0 ? 'No reviews' : 'Show more'}</Button>
								</a>
							</Link>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};
