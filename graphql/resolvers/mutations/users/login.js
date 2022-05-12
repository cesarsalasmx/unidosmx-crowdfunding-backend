const { auth } = require("./../../../../lib/auth");
require("dotenv").config();
const SECRET = process.env.SECRET;
const {
    GraphQLString,
} = require ("graphql");
const bcript = require("bcrypt");
const { GraphQLDate } = require("graphql-iso-date");
const { loginUser } = require("../../../schemas/login");

const loginUserMutation = {
    type: loginUser,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(parentValue, args){
        
        const query = "";
        return auth.login(args.email,args.password);
    },
};

module.exports = { loginUserMutation };