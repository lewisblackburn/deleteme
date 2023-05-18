import React from 'react';
import {Loading} from '@components/Loading';
import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {Layout} from '@modules/layouts/Layout';
import {useDeleteMovieReviewMutation, useMeQuery, useMovieReviewQuery} from 'generated/graphql';
import {useRouter} from 'next/router';
import {IconButton} from '@components/IconButton';
import {AiOutlineDelete} from 'react-icons/ai';
import {notify} from '@components/Notify';
import {useGetIntId} from 'hooks/useGetIntId';

export const ReviewPage: React.FC = () => {
	const router = useRouter();
	useVerifyLoggedIn();

	const movieId: number = useGetIntId();

	const {data: me} = useMeQuery();

	const {data: review} = useMovieReviewQuery({
		variables: {
			where: {
				userId_movieId: {
					userId: me?.me?.id ?? -1,
					movieId,
				},
			},
		},
	});

	const [deleteMovieReview] = useDeleteMovieReviewMutation();

	if (!review?.movieReview) return <Loading />;

	return (
		<Layout>
			<div className="container px-4 mx-auto">
				<section className="py-20">
					<div className="container px-4 mx-auto">
						<div className="max-w-lg mx-auto mb-12 text-center">
							<img className="mx-auto" src="/quote.svg" alt="" />
							<h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">Review</h2>
						</div>
						<div className="flex flex-wrap max-w-5xl mx-auto mb-6">
							<div className="w-full px-3 mb-6">
								<div className="p-8 bg-white shadow rounded">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center">
											<img
												className="h-16 w-16 rounded-full object-cover"
												src={review?.movieReview.user.avatar}
												alt=""
											/>
											<div className="pl-4">
												<p className="text-xl">{review?.movieReview.user?.username}</p>
												<p className="text-blue-600">{review?.movieReview.rating} / 5</p>
											</div>
										</div>
										{me?.me?.id === review.movieReview.user.id && (
											<IconButton
												icon={AiOutlineDelete}
												onClick={async () => {
													await deleteMovieReview({
														variables: {
															movieId: review.movieReview.movieId,
														},
													})
														.then(async () => {
															notify('success', 'mutation', 'Review deleted');
															router.back();
															router.back();
														})
														.catch(() => {
															notify('error', 'mutation', 'Review deletion failed');
														});
												}}
											/>
										)}
									</div>
									<p className="leading-loose text-blueGray-400">{review.movieReview.review}</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};
