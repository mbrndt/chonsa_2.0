import Header from "./components/header/index";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Journal from "./components/journal";

const cache = new InMemoryCache({
  typePolicy: {
    Query: {
      fields: {
        journals: {
          merge: (existing, incoming) => incoming,
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Journal />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
