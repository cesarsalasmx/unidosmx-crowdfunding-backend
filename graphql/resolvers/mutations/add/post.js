const db = require("../../../../lib/postgres");
const {
    GraphQLInt,
    GraphQLString
} = require ("graphql");
const { GraphQLDate } = require("graphql-iso-date");
const AddPost = require("../../../schemas/posts").AddPost;

const AddPostMutation = {
    type: AddPost,
    args: {
        author: { type: GraphQLInt },
        date: { type: GraphQLDate },
        content: { type: GraphQLString },
        title: { type: GraphQLString },
        status: { type: GraphQLInt },
        image: { type: GraphQLString },
        category: { type: GraphQLString },
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

module.exports = { AddPostMutation };