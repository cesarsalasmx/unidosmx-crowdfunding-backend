const { db } = require("../../../lib/postgres");
const {
    GraphQLList
} = require("graphql");
const GetPost = require("../../schemas/Posts").GetPost;

const AllPostsQuery = {
    type: GraphQLList(GetPost),
    resolve(parentValue, args){
        const values = [];
        const query = ``;
        return db
        .one(query,values)
        .then((res) => res )
        .catch((err) => err );
    },
};

module.exports = { AllPostsQuery };