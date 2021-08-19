import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://sg-ants-server.herokuapp.com/graphql',
    cache: new InMemoryCache()
});
