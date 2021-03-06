const { db } = require("../../../lib/postgres");
const { GraphQLString } = require("graphql");
const GetUser = require("../../schemas/users").GetUser;

const UserQuery = {
    type: GetUser,
    args: { id: { type: GraphQLString }},
    resolve(parentValue, args){
        const values = [args.id];
        const query = `SELECT id, first_name, last_name, username, email, password, date_registration, birthday, value, status, country FROM public.view_users_donations WHERE id=$1`;
        return db
        .one(query,values)
        .then((res) => res )
        .catch((err) => err );
    },
};

module.exports = { UserQuery };