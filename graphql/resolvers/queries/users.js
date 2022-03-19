const { db } = require("../../../lib/postgres");
const {
    GraphQLID
} = require("graphql");
const GetUser = require("../../schemas/Users").GetUser;

const UserQuery = {
    type: GetUser,
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

module.exports = { UserQuery };