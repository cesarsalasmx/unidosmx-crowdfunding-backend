const db = require("../../../../lib/postgres");
const {
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
} = require ("graphql");
const bcript = require("bcrypt");
const { GraphQLDate } = require("graphql-iso-date");
const UserQuery = require("../../queries/users").UserQuery;

const AddUserMutation = {
    type: UserQuery,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(parentValue, args){
        const values = [];
        const query = "";
        return db
            .one(query, values)
            .then((res) => res)
            .catch((err) => err);
    },
};

module.exports = { AddUserMutation };