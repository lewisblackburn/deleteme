import {Button} from '@components/Button';
import {Icon} from '@components/Icon';
import {Loading} from '@components/Loading';
import {useCountMediaQuery} from 'generated/graphql';
import {pluralise} from 'lib/pluralise';
import Link from 'next/link';
import React from 'react';
import {AiOutlineVideoCamera} from 'react-icons/ai';

export const LandingPage: React.FC = () => {
	const {data} = useCountMediaQuery();

	if (!data?.aggregateMovie) return <Loading />;

	return (
		<>
			<section
				className="xl:bg-contain bg-top bg-no-repeat"
				style={{backgroundImage: 'url("metis-assets/backgrounds/intersect.svg")'}}
			>
				<div className="container px-4 mx-auto">
					<nav className="flex justify-between items-center py-6">
						<a className="text-3xl font-semibold leading-none" href="#">
							swoosh
						</a>
						<div>
							<Link href="/login">
								<Button variant="tertiary" className="mr-2">
									Log In
								</Button>
							</Link>
							<Link href="/register">
								<a className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded">
									Sign Up
								</a>
							</Link>
						</div>
					</nav>
					<div className="py-12 text-center">
						<div className="max-w-lg mx-auto mb-8">
							<h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
								<span>The one and</span>
								<span className="text-blue-600 line-through mx-2">only</span>
								<span>internet movie databse.</span>
							</h2>
							<p className="text-blueGray-400 leading-relaxed">
								{"we'll"} help you find and store exactly what {"you're"} looking for.
							</p>
						</div>
						<div>
							<a
								className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
								href="/home"
							>
								Get Started
							</a>
							<a
								className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-blueGray-100 rounded"
								href="/login"
							>
								Already a Member?
							</a>
						</div>
					</div>
					<div className="relative max-w-3xl mt-6 mb-8 mx-auto">
						<img src="pattern-small.png" alt="" />
						<div className="absolute" style={{top: '3%', left: '9%', width: '82%', height: '90%'}}>
							<img className="object-contain w-full h-full" src="app-mockup.png" alt="" />
						</div>
					</div>
					<div className="flex justify-center w-full">
						<div className="grid grid-cols-2 gap-2 lg:gap-48 lg:grid-cols-4 pt-8 pb-16 w-full place-items-center">
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineVideoCamera} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{data?.aggregateUser._count?._all}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">
										{pluralise('User', data.aggregateUser._count?._all ?? 1)}
									</p>
								</div>
							</div>
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineVideoCamera} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{data?.aggregatePerson._count?._all}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">
										{pluralise('Actor', data.aggregatePerson._count?._all ?? 1)}
									</p>
								</div>
							</div>
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineVideoCamera} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{data?.aggregateMovie._count?._all}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">
										{pluralise('Movie', data.aggregateMovie._count?._all ?? 1)}
									</p>
								</div>
							</div>
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineVideoCamera} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{data?.aggregateMovieReview._count?._all}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">
										{pluralise('Review', data.aggregateMovieReview._count?._all ?? 1)}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
						<div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
							<a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none" href="#">
								swoosh
							</a>
						</div>
						<div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
							<p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo.
							</p>
						</div>
						<div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
							<p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Office</p>
							<p className="lg:text-lg text-blueGray-400">123 Sun Dale Road, York</p>
						</div>
						<div className="w-full lg:w-1/5 px-3">
							<p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Contacts</p>
							<p className="lg:text-lg text-blueGray-400">help@swoosh.com</p>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row items-center lg:justify-between">
						<p className="text-xs text-blueGray-400">© {new Date().getFullYear()}. All rights reserved.</p>
						<div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
							<a className="inline-block px-2" href="#">
								<img src="metis-assets/icons/facebook-blue.svg" alt="" />
							</a>
							<a className="inline-block px-2" href="#">
								<img src="metis-assets/icons/twitter-blue.svg" alt="" />
							</a>
							<a className="inline-block px-2" href="#">
								<img src="metis-assets/icons/instagram-blue.svg" alt="" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
