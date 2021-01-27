import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import { getToken } from "../utils/AuthUtils";

// TODO: replace with prod url
const uri = "http://192.168.1.51:3000/graphql";

const httpLink = new HttpLink({ uri: uri.toString() });

const authMiddleware = new ApolloLink(async (operation, forward) => {
  const token = await getToken();
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation);
});
const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};
export default new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
