import { ApolloServer } from "apollo-server";

import { typeDefs } from "./controllers/typeDefs";
import { resolvers } from "./controllers/resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
