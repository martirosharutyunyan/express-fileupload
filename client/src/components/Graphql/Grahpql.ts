import { gql, request } from 'graphql-request';

export const gRequest =async (query:string):Promise<any> => {
    return await request('http://localhost:5000/graphql',query)
}

export const get =async (email:string):Promise<void> => {
    const query = `
        query {
            
        }
    `;
    const data = await gRequest(query)
    return data
}

