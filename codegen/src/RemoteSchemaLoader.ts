import { GraphQLSchema } from 'graphql';
import { getIntrospectionQuery } from 'graphql/utilities';
import { buildClientSchema } from 'graphql/utilities';
import fetch from 'node-fetch';

export async function loadRemoteSchema(
    endpoint: string,
    headers?: { [key: string]: string }
): Promise<GraphQLSchema> {
    const body = JSON.stringify({"query": getIntrospectionQuery()});
    const response = await fetch(endpoint, {
        method: 'POST',
        body,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(body).toString(),
            ...headers
        }
    });
    const {data, errors} = await response.json();
    if (errors !== undefined) {
        throw new Error();
    }
    return buildClientSchema(data);
}
