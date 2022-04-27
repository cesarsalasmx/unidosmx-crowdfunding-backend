const db = require("../../../../lib/postgres");
const {
    GraphQLInt,
    GraphQLString,
} = require ("graphql");
const { GraphQLDate } = require("graphql-iso-date");
const AddComment = require("../../../schemas/comments").AddComment;

const AddCommentMutation = {
    type: AddComment,
    args: {
        id_post: { type: GraphQLInt },
        id_author: { type: GraphQLInt },
        author: { type: GraphQLString },
        author_email: { type: GraphQLString },
        author_ip: { type: GraphQLString },
        date: { type: GraphQLDate },
        content: { type: GraphQLString },
        status: { type: GraphQLInt },
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

module.exports = { AddCommentMutation };