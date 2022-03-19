const graphql = require ("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = graphql;
const {
    GraphQLDate
} = require("graphql-iso-date");

const GetDonation = GraphQLObjectType({
    name: "GetDonation",
    type: "query",
    fields: {
        id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        post_id: { type: GraphQLInt },
        date: {type: GraphQLDate },
        status: { type: GraphQLString },
        amount: { type: GraphQLString },
        id_payment: { type: GraphQLString },
    }
});
const AddDonation = GraphQLObjectType({
    name: "AddDonation",
    type: "mutation",
    fields: {
        id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        post_id: { type: GraphQLInt },
        date: {type: GraphQLDate },
        status: { type: GraphQLString },
        amount: { type: GraphQLString },
        id_payment: { type: GraphQLString },
    }
});

module.exports = { GetDonation, AddDonation };