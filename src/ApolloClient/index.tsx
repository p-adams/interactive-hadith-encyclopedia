import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_ENDPOINT,
  cache: new InMemoryCache(),
});

function WrappedApolloClient({ children }: { children: JSX.Element }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default WrappedApolloClient;
