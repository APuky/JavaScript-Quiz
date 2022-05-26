import { GraphQLClient } from 'graphql-request';

const endpoint =
  process.env.API_ENDPOINT || `http://localhost:7900/api/graphql`;
console.log(endpoint);

const client = new GraphQLClient(endpoint, {
  credentials: 'include',
  mode: 'cors',
});

export default client;
