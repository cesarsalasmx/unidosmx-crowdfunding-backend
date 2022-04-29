const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema } = require("graphql");
const bodyParser = require("body-parser");
const query = require("./graphql/resolvers/queries");
const mutation = require("./graphql/resolvers/mutations");
const schema = new GraphQLSchema({ query: query, mutation: mutation });
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({extended: true,})
);
app.use("/graphql", cors(),graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(port);
console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);