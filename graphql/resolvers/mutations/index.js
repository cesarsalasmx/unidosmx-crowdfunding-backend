const { GraphQLObjectType } = require("graphql");
const { AddComment } = require("./add/comment");
const { AddDonation } = require("./add/donation");
const { AddPost } = require("./add/post");
const { AddSession } = require("./add/session");
const { AddUser } = require("./add/user");

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    type: "Mutation",
    fields: {
        AddComment,
        AddDonation,
        AddPost,
        AddSession,
        AddUser,
    },
});

modele.exports = RootMutation;