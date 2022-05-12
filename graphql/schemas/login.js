const { GraphQLBoolean } = require("graphql");
const graphql = require ("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = graphql;

const loginUser = new GraphQLObjectType({
    name: "LoginUserSchema",
    type: "mutation",
    fields: {
        id: { type: GraphQLInt },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        roles: { type: GraphQLString },
        success: { type: GraphQLBoolean },
        message: {type: GraphQLString },
        token: { type: GraphQLString },
        error: { type: GraphQLString },
    }
});

module.exports = {loginUser};