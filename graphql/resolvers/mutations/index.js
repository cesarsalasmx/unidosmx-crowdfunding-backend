const { GraphQLObjectType } = require("graphql");
const { AddCommentMutation } = require("./add/comment");
const { AddDonationMutation } = require("./add/donation");
const { AddPostMutation } = require("./add/post");
const { AddSessionMutation } = require("./add/session");
const { AddUserMutation } = require("./add/user");

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    type: "Mutation",
    fields: {
        AddCommentMutation,
        AddDonationMutation,
        AddPostMutation,
        AddSessionMutation,
        AddUserMutation,
    },
});

module.exports = RootMutation;