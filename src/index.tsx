import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://messenger-server.onrender.com/graphql/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
