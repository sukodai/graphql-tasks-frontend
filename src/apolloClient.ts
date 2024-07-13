import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/grapql",
});

const authLink = setContext((_, prevContext) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...prevContext.headers,
      authrization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
