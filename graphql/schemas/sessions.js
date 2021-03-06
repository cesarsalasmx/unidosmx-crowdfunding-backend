const graphql = require ("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = graphql;
const {
    GraphQLDate
} = require("graphql-iso-date");

const GetSessions = new GraphQLObjectType({
    name: "GetSessions",
    type: "query",
    fields: {
        id: { type: GraphQLInt },
        page_name: { type: GraphQLString },
        ip: { type: GraphQLString },
        browser: { type: GraphQLString },
        date: { type: GraphQLDate },
        device: { type: GraphQLString },
        referrer: { type: GraphQLString },
    }
});
 const AddSession = new GraphQLObjectType({
     name: "AddSession",
     type: "mutation",
     fields: {
        id: { type: GraphQLInt },
        page_name: { type: GraphQLString },
        ip: { type: GraphQLString },
        browser: { type: GraphQLString },
        device: { type: GraphQLString },
        referrer: { type: GraphQLString },
    }
 });
 module.exports = { GetSessions, AddSession };