const graphql = require ("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} = graphql;
const {
    GraphQLDate
} = require("graphql-iso-date");

const GetUser = GraphQLObjectType({
    name: "GetUser",
    type: "query",
    fields: {
        id_user: { type: GraphQLInt },
        first_nane: { type: GraphQLString },
        last_name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        date_registration: { type: GraphQLDate },
        birthday: { type: GraphQLDate },
        id_genders: { type: GraphQLInt },
        status: { type: GraphQLBoolean },
        id_roles: { type: GraphQLInt },
        country: { type: GraphQLString },
    }
});

const AddUser = GraphQLObjectType({
    name: "AddUser",
    type: "mutation",
    fields: {
        id_user: { type: GraphQLInt },
        first_nane: { type: GraphQLString },
        last_name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        date_registration: { GraphQLDate },
        birthday: { type: GraphQLDate },
        id_genders: { type: GraphQLInt },
        status: { type: GraphQLBoolean },
        id_roles: { type: GraphQLInt },
        country: { type: GraphQLString },
    }
});

module.exports = { GetUser, AddUser };