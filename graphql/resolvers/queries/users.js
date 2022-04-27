const { db } = require("../../../lib/postgres");
const {
    GraphQLID
} = require("graphql");
const GetUser = require("../../schemas/users").GetUser;

const UserQuery = {
    type: GetUser,
    args: { id: { type: GraphQLID }},
    resolve(parentValue, args){
        const values = [args.id];
        const query = `SELECT id, first_name, last_name, username, email, password, date_registration, birthday, id_gender, status, id_role, country FROM public.users WHERE id=$1`;
        return db
        .one(query,values)
        .then((res) => res )
        .catch((err) => err );
    },
};

module.exports = { UserQuery };