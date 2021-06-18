import { Fetcher, createFetcher } from 'graphql-ts-client-api';

export interface UserFetcher<T> extends Fetcher<T> {

	readonly __typename: UserFetcher<T & {__typename: 'User'}>;
	readonly "~__typename": UserFetcher<Omit<T, '__typename'>>;

	readonly loginName: UserFetcher<T & {readonly loginName: string}>;
	readonly "~loginName": UserFetcher<Omit<T, 'loginName'>>;

	readonly nickName: UserFetcher<T & {readonly nickName: string}>;
	readonly "~nickName": UserFetcher<Omit<T, 'nickName'>>;
}

export const user$ = 
	createFetcher<UserFetcher<{}>>();

export const user$$ = 
	user$
		.loginName
		.nickName
	;
