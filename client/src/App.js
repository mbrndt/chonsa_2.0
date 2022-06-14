import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";
import Journal from "./components/Journal";

const cache = new InMemoryCache({
  typePolicy: {
    Query: {
      fields: {
        clients: {
          merge: (existing, incoming) => incoming,
        },
      },
      projects: {
        merge: (existing, incoming) => incoming,
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="App">
          <Clients />
          <Journal />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
