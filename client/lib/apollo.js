import { ApolloClient, InMemoryCache } from "@apollo/client";
const url='http://localhost:1337';

const apolloClient = new ApolloClient({
  uri: `${url}/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;
