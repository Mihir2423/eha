import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/typeDefs.js";
import resolvers from "./schema/resolvers/index.js";
import Connection from "./database/db.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

Connection();

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`Your api is running at : ${url}`);
});
