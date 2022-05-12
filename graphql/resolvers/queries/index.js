const { GraphQLObjectType } = require("graphql");
//const { AllDonationQuery } = require("./allDonations");
const { AllPostsQuery } = require("./allPosts");
const { AllSessionsQuery } = require("./allSessions");
const { DonationQuery } = require("./donations");
const { PostQuery } = require("./post");
const { UserQuery } = require("./users");

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    type: "Query",
    fields: {
        //AllDonationQuery,
        AllPostsQuery,
        AllSessionsQuery,
        DonationQuery,
        PostQuery,
        UserQuery,
    }
});

module.exports = RootQuery;