const { db } = require("../../../lib/postgres");
const {
    GraphQLList
} = require("graphql");
const GetAllPosts = require("../../schemas/posts").GetAllPosts;

const AllPostsQuery = {
    type: GraphQLList(GetAllPosts),
    resolve(parentValue, args){
        const values = true;
        const query = `SELECT * FROM view_causes`;
        return db
        .many(query,values)
        .then((res) => res )
        .catch((err) => err );
    },
};

module.exports = { AllPostsQuery };