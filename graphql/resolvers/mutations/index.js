const { GraphQLObjectType } = require("graphql");
const { AddCommentMutation } = require("./add/comment");
const { AddDonationMutation } = require("./add/donation");
const { AddPostMutation } = require("./add/post");
const { AddSessionMutation } = require("./add/session");
const { AddUserMutation } = require("./add/user");
const { UpdatePostMutation } = require("./update/post");
const { DeletePostMutation } = require("./delete/post");
const { loginUserMutation } = require("./users/login");
const { ViewUser } = require("./users/viewUser");
const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    type: "Mutation",
    fields: {
        AddCommentMutation,
        AddDonationMutation,
        AddPostMutation,
        AddSessionMutation,
        AddUserMutation,
        UpdatePostMutation,
        DeletePostMutation,
        loginUserMutation,
        ViewUser
    },
});
module.exports = RootMutation;