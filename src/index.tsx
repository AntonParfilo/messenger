import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider, InMemoryCache, ApolloClient, split, HttpLink  } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const wsLink = new GraphQLWsLink(createClient({
  url: `ws://localhost:4000/graphql`,
  // url: `wss://messenger-server.onrender.com/graphql`,
}));

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  // uri: 'https://messenger-server.onrender.com/graphql',
});


const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
