import {ApolloClient, InMemoryCache} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import {NextPageContext} from 'next';
import {withApollo} from 'next-apollo';
import {apiBaseUrl} from './constants';

const createClient = (ctx?: NextPageContext) =>
	new ApolloClient({
		link: createUploadLink({
			uri: apiBaseUrl,
			credentials: 'include',
			headers: {
				cookie: (typeof window === 'undefined' ? ctx?.req?.headers.cookie : undefined) ?? '',
			},
		}) as any,
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						movies: {
							keyArgs: [],
							merge(existing = [], incoming) {
								return [...existing, ...incoming];
							},
						},
						people: {
							keyArgs: [],
							merge(existing = [], incoming) {
								return [...existing, ...incoming];
							},
						},
						songs: {
							keyArgs: [],
							merge(existing = [], incoming) {
								return [...existing, ...incoming];
							},
						},
						genres: {
							keyArgs: [],
							merge(existing = [], incoming) {
								return [...existing, ...incoming];
							},
						},
						follows: {
							keyArgs: [],
							merge(existing = [], incoming) {
								return [...existing, ...incoming];
							},
						},
						notifications: {
							keyArgs: [],
							merge(existing = [], incoming) {
								return [...existing, ...incoming];
							},
						},
					},
				},
			},
		}),
	});

export default withApollo(createClient);
