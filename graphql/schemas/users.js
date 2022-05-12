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

const GetUser = new GraphQLObjectType({
    name: "GetUser",
    type: "query",
    fields: {
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        date_registration: { type: GraphQLDate },
        birthday: { type: GraphQLDate },
        value: { type: GraphQLString },
        status: { type: GraphQLBoolean },
        country: { type: GraphQLString },
    }
});

const AddUser = new GraphQLObjectType({
    name: "AddUser",
    type: "mutation",
    fields: {
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        date_registration: {type: GraphQLDate },
        birthday: { type: GraphQLDate },
        gender: { type: GraphQLString },
        status: { type: GraphQLBoolean },
        roles: { type: GraphQLString },
        country: { type: GraphQLString },
    }
});

const ViewUserMutation = new GraphQLObjectType({
    name: "viewUserMutation",
    type: "mutation",
    fields: {
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        date_registration: {type: GraphQLDate },
        birthday: { type: GraphQLDate },
        value: { type: GraphQLString },
        status: { type: GraphQLBoolean },
        roles: { type: GraphQLString },
        country: { type: GraphQLString },
    }
});
module.exports = { GetUser, AddUser, ViewUserMutation};