require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { connectDB } = require("./db");

const app = express();
connectDB();

async function start() {
  const apolloServerInstance = new ApolloServer({
    typeDefs,
    resolvers,
    persistedQueries: false,
  });

  await apolloServerInstance.start();
  apolloServerInstance.applyMiddleware({ app });

  app.listen(process.env.port, () => {
    console.log( `Server is running on port ${process.env.port}` );
        
  });
}

start();
