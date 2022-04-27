const db = require("../../../../lib/postgres");
const {
    GraphQLInt,
    GraphQLString,
} = require ("graphql");
const { GraphQLDate } = require("graphql-iso-date");
const AddSession = require("../../../schemas/sessions").AddSession;

const AddSessionMutation = {
    type: AddSession,
    args: {
        id_post: { type: GraphQLInt },
        ip: { type: GraphQLString },
        browser: { type: GraphQLString },
        date: { type: GraphQLDate },
        device: { type: GraphQLString },
        referrer: { type: GraphQLString },
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

module.exports = { AddSessionMutation };