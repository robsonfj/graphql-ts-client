import { Fetcher, createFetcher } from 'graphql-ts-client-api';
import {EmployeeFetcher} from '.';

export interface DepartmentFetcher<T> extends Fetcher<T> {

	readonly __typename: DepartmentFetcher<T & {__typename: 'Department'}>;
	readonly "~__typename": DepartmentFetcher<Omit<T, '__typename'>>;

	readonly avgSalary: DepartmentFetcher<T & {readonly avgSalary?: number}>;
	readonly "~avgSalary": DepartmentFetcher<Omit<T, 'avgSalary'>>;

	employees<X>(child: EmployeeFetcher<X>): DepartmentFetcher<T & {readonly employees: X[]}>;
	readonly "~employees": DepartmentFetcher<Omit<T, 'employees'>>;

	readonly id: DepartmentFetcher<T & {readonly id: number}>;
	readonly "~id": DepartmentFetcher<Omit<T, 'id'>>;

	readonly name: DepartmentFetcher<T & {readonly name: string}>;
	readonly "~name": DepartmentFetcher<Omit<T, 'name'>>;
}

export const department$ = 
	createFetcher<DepartmentFetcher<{}>>('employees');

export const department$$ = 
	department$
		.avgSalary
		.id
		.name
	;
