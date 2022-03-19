const { db } = require("../../../lib/postgres");
const {
    GraphQLID
} = require("graphql");
const GetPost = require("../../schemas/posts").GetPost;

const PostQuery = {
    type: GetPost,
    args: { id: { type: GraphQLID }},
    resolve(parentValue, args){
        const values = [];
        const query = ``;
        return db
        .one(query,values)
        .then((res) => res )
        .catch((err) => err );
    },
};

module.exports = PostQuery;