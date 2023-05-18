import {BackdropDiv} from '@components/BackdropDiv';
import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Textarea} from '@components/Form/Textarea';
import {IconButton} from '@components/IconButton';
import {Loading} from '@components/Loading';
import {Modal} from '@components/Modal/Modal';
import {notify} from '@components/Notify';
import {PosterDiv} from '@components/PosterDiv';
import {Form, Formik, FormikHelpers} from 'formik';
import {
	ActorsInMovieDocument,
	MovieDocument,
	MovieQuery,
	QueryMode,
	UploadType,
	useActorsInMovieQuery,
	useCreateActorInMovieMutation,
	useDeleteActorInMovieMutation,
	useGenresQuery,
	useMovieQuery,
	usePeopleQuery,
	useUpdateGenreMutation,
	useUpdateMovieMutation,
	useUploadBackdropMutation,
	useUploadPosterMutation,
} from 'generated/graphql';
import useDebounce from 'hooks/useDebounce';
import {useGetIntId} from 'hooks/useGetIntId';
import handleInputClick from 'lib/handleInputClick';
import {useRouter} from 'next/router';
import React, {useRef, useState} from 'react';
import {AiOutlineDelete, AiOutlinePlus} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

interface TableProps {
	movie: MovieQuery | undefined;
}

const GenreTable: React.FC<TableProps> = ({movie}) => {
	const [genrePredicate, setGenrePrediate] = useState('');

	const {data: genres} = useGenresQuery({
		variables: {
			where: {
				name: {
					startsWith: genrePredicate,
					mode: QueryMode.Insensitive,
				},
			},
		},
	});

	const genreList = genres?.genres
		.filter(genre => genre.name.toLowerCase().includes(genrePredicate.toLowerCase()))
		.slice(0, 5);

	const [updateGenre] = useUpdateGenreMutation();

	const addGenreEvent = async (genreId: number) => {
		await updateGenre({
			variables: {
				data: {
					movies: {
						connect: [
							{
								id: movie?.movie?.id,
							},
						],
					},
				},
				where: {
					id: genreId,
				},
			},
			refetchQueries: [MovieDocument],
		});
	};

	const removeGenreEvent = async (genreId: number) => {
		await updateGenre({
			variables: {
				data: {
					movies: {
						disconnect: [
							{
								id: movie?.movie?.id,
							},
						],
					},
				},
				where: {
					id: genreId,
				},
			},
			refetchQueries: [MovieDocument],
		});
	};

	return (
		<section className="py-8">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap items-center mb-6">
					<h3 className="text-xl font-bold">Genres</h3>
					<div className="w-full md:w-auto my-6 md:my-0 flex items-center ml-auto  bg-white border rounded">
						<input
							className="pl-2 py-3 text-sm focus:outline-none"
							type="text"
							placeholder="Type to search..."
							onChange={e => setGenrePrediate(e.target.value)}
						/>
					</div>
				</div>
				<div className="flex flex-col space-y-5">
					{genreList?.map(genre => (
						<div
							key={genre.name}
							className="flex items-center justify-between pl-4 pr-6 py-4 bg-white shadow rounded"
						>
							<h1>{genre.name}</h1>

							{movie?.movie?.genres.some(g => g.name === genre.name) ? (
								<IconButton icon={AiOutlineDelete} onClick={async () => removeGenreEvent(genre.id)} />
							) : (
								<IconButton icon={AiOutlinePlus} onClick={async () => addGenreEvent(genre.id)} />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const ActorTable: React.FC<TableProps> = ({movie}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [role, setRole] = useState('');
	const [personId, setPersonId] = useState(-1);
	const [predicate, setPredicate] = useState('');
	const [predicateDebounced] = useDebounce(predicate, 500);

	const {data} = usePeopleQuery({
		fetchPolicy: 'no-cache',
		variables: {
			where: {
				name: {
					startsWith: predicateDebounced,
					mode: QueryMode.Insensitive,
				},
			},
			take: 20,
		},
	});

	// This is only needed for the ActorTable as the GenreTable will never have a movie over the limited amount of query take requests (20) unlike actors might
	const {data: actors} = useActorsInMovieQuery({
		fetchPolicy: 'no-cache',
		variables: {
			movieId: movie?.movie?.id ?? -1,
		},
	});

	const [addActorInMovie] = useCreateActorInMovieMutation();
	const [removeActorInMovie] = useDeleteActorInMovieMutation();

	const addActorEvent = async (personId: number) =>
		addActorInMovie({
			variables: {
				data: {
					movie: {
						connect: {
							id: movie?.movie?.id,
						},
					},
					person: {
						connect: {
							id: personId,
						},
					},
					role,
				},
			},
			refetchQueries: [MovieDocument, ActorsInMovieDocument],
		});

	const removeActorEvent = async (personId: number) =>
		removeActorInMovie({
			variables: {
				where: {
					personId_movieId: {
						movieId: movie?.movie?.id ?? 0,
						personId,
					},
				},
			},
			refetchQueries: [MovieDocument, ActorsInMovieDocument],
		});

	return (
		<>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				<input
					autoFocus
					className="w-full mb-4 p-4 text-sm placeholder-blueGray-400 leading-none bg-blueGray-50 outline-none rounded"
					placeholder="Role"
					type="text"
					value={role}
					onChange={e => setRole(e.currentTarget.value)}
				/>
				<div className="flex items-center justify-between">
					<Button variant="secondary" className="mt-4" onClick={() => setIsOpen(false)}>
						Cancel
					</Button>
					<Button
						className="mt-4"
						onClick={async () => {
							await addActorEvent(personId);
							setIsOpen(false);
							setRole('');
						}}
					>
						Submit
					</Button>
				</div>
			</Modal>
			<section className="py-8">
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap items-center mb-6">
						<h3 className="text-xl font-bold">Actors</h3>
						<div className="w-full md:w-auto my-6 md:my-0 flex items-center ml-auto  bg-white border rounded">
							<input
								className="pl-2 py-3 text-sm focus:outline-none"
								type="text"
								placeholder="Type to search..."
								onChange={e => setPredicate(e.target.value)}
							/>
						</div>
					</div>
					<div className="flex flex-col space-y-5">
						{data?.people?.map(person => (
							<div
								key={person.id}
								className="flex items-center justify-between pl-4 pr-6 py-4 bg-white shadow rounded"
							>
								<h1>{person.name}</h1>

								{actors?.movie?.actors.some(actor => actor.personId === person.id) ? (
									<IconButton
										icon={AiOutlineDelete}
										onClick={async () => {
											await removeActorEvent(person.id);
										}}
									/>
								) : (
									<IconButton
										icon={AiOutlinePlus}
										onClick={() => {
											setIsOpen(true);
											setPersonId(person.id);
										}}
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

interface Values {
	title: string;
	tagline: string;
	overview: string;
	rating: string;
	runtime: number;
	released: any;
	trailer: string;
}

export const EditPage: React.FC = () => {
	useVerifyLoggedIn();

	const movieId = useGetIntId();
	const {data: movie} = useMovieQuery({
		fetchPolicy: 'no-cache',
		skip: movieId === -1,
		variables: {
			movieId,
		},
	});

	const router = useRouter();

	const [updateMovie] = useUpdateMovieMutation();

	const [uploadBackdrop] = useUploadBackdropMutation();
	const [uploadPoster] = useUploadPosterMutation();

	const [backdrop, setBackdrop] = useState();
	const [backdropImgData, setBackdropImgData] = useState<any>();
	const [poster, setPoster] = useState();
	const [posterImgData, setPosterImgData] = useState<any>();

	const backdropInput = useRef(null);
	const posterInput = useRef(null);

	const handleBackdropChange = (event: any) => {
		setBackdrop(event.target.files[0]);
		if (event.target.files[0]) {
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				setBackdropImgData(reader.result);
			});
			reader.readAsDataURL(event.target.files[0]);
		}
	};

	const handlePosterChange = (event: any) => {
		setPoster(event.target.files[0]);
		if (event.target.files[0]) {
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				setPosterImgData(reader.result);
			});
			reader.readAsDataURL(event.target.files[0]);
		}
	};

	if (!movie?.movie) return <Loading />;

	return (
		<Layout>
			<Formik
				initialValues={{
					title: movie?.movie?.title ?? '',
					tagline: movie?.movie?.tagline ?? '',
					overview: movie?.movie?.overview ?? '',
					rating: movie?.movie?.rating ?? '',
					runtime: movie?.movie?.runtime ?? 0,
					released: new Date(movie?.movie?.released ?? 0).toISOString().split('T')[0] ?? 0,
					trailer: movie?.movie?.trailer ?? '',
				}}
				onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
					setSubmitting(true);
					await updateMovie({
						variables: {
							data: {
								title: {
									set: values.title,
								},
								tagline: {
									set: values.tagline,
								},
								overview: {
									set: values.overview,
								},
								rating: {
									set: values.rating,
								},
								runtime: {
									set: parseFloat(values.runtime.toString()),
								},
								released: {
									set: values.released,
								},
								trailer: {
									set: values.trailer,
								},
							},
							where: {
								id: movie?.movie?.id,
							},
						},
						refetchQueries: [MovieDocument],
					})
						.then(() => {
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							notify('success', 'mutation', `${movie.movie?.title} updated successfully`);
						})
						.catch(() => {
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							notify('error', 'mutation', `${movie.movie?.title} update failed`);
						})
						.then(() => {
							if (backdrop) {
								uploadBackdrop({
									variables: {
										id: movieId,
										file: backdrop,
										type: UploadType.Movie,
									},
								})
									.then(() => {
										notify(
											'success',
											'mutation',
											// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
											`${movie.movie?.title} backdrop uploaded successfully`
										);
									})
									.catch(() => {
										// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
										notify('error', 'mutation', `${movie.movie?.title} backdrop upload failed`);
									});
							}

							if (poster) {
								uploadPoster({
									variables: {
										id: movieId,
										file: poster,
										type: UploadType.Movie,
									},
								})
									.then(() => {
										notify(
											'success',
											'mutation',
											// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
											`${movie.movie?.title} poster uploaded successfully`
										);
									})
									.catch(() => {
										// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
										notify('error', 'mutation', `${movie.movie?.title} poster upload failed`);
									});
							}
						})
						.then(() => {
							setSubmitting(false);
							router.back();
						});
				}}
			>
				{({isSubmitting}) => (
					<Form>
						<div className="container px-4 mx-auto">
							<div className="max-w-2xl mx-auto mb-6">
								<div className="flex flex-col items-center text-center mb-6">
									<InputField type="text" name="title" />
								</div>
							</div>
							<div className="flex space-x-5 max-w-5xl mx-auto mb-8">
								<PosterDiv
									src={posterImgData ?? movie?.movie?.poster ?? ''}
									onClick={() => {
										handleInputClick(posterInput);
									}}
									onChange={handlePosterChange}
								>
									<input
										ref={posterInput}
										type="file"
										id="file"
										accept="images"
										style={{display: 'none'}}
									/>
								</PosterDiv>
								<BackdropDiv
									src={backdropImgData ?? movie?.movie?.backdrop ?? ''}
									onClick={() => {
										handleInputClick(backdropInput);
									}}
									onChange={handleBackdropChange}
								>
									<input
										ref={backdropInput}
										type="file"
										id="file"
										accept="images"
										style={{display: 'none'}}
									/>
								</BackdropDiv>
							</div>
							<div className="max-w-2xl mx-auto">
								<InputField type="text" name="tagline" />
								<Textarea name="overview" placeholder="overview" />
								<InputField type="text" name="rating" />
								<InputField type="text" name="runtime" />
								<InputField type="date" name="released" />
								<InputField type="text" name="trailer" />
							</div>
						</div>
						<GenreTable movie={movie} />
						<ActorTable movie={movie} />
						<section className="py-20">
							<div className="container px-4 mx-auto text-center">
								<div className="flex space-x-5 justify-center">
									<Button type="submit">{isSubmitting ? 'Submitting...' : 'Save changes'}</Button>
									<Button variant="secondary" onClick={() => history.go(-1)}>
										Cancel
									</Button>
								</div>
							</div>
						</section>
					</Form>
				)}
			</Formik>
		</Layout>
	);
};
