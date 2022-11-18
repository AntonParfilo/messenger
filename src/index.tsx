import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider, InMemoryCache, ApolloClient, split, HttpLink  } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';


const wsLink = new GraphQLWsLink(createClient({
  url: `ws://messenger-server.onrender.com/graphql`,
}));

const httpLink = new HttpLink({
  uri: 'https://messenger-server.onrender.com/graphql',
});

// const wsLink = new WebSocketLink({
//   uri: `ws://messenger-server.onrender.com:4000/graphql`,
//   options: {
//     reconnect: true,
//   }
// });

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
