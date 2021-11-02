import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { typeDefs } from "./controllers/typeDefs";
import { resolvers } from "./controllers/resolvers";
import express from "express";
import http from "http";
import { DocumentNode } from "graphql";
const logger = require("morgan");

async function startApolloServer(typeDefs: DocumentNode, resolvers: any) {
  const app = express();
  app.use((req, res, next) => {
    console.log(req.statusCode);
    next();
  });

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
