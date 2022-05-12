const { db } = require("../../../../lib/postgres");
const { GraphQLInt } = require("graphql");
const ViewUserMutation = require("../../../schemas/users").ViewUserMutation;

const ViewUser = {
    type: ViewUserMutation,
    args: { id: { type: GraphQLInt }},
    resolve(parentValue, args){
        const values = [args.id];
        const query = `SELECT id, first_name, last_name, username, email, password, date_registration, birthday, value, status, country FROM public.view_users_donations WHERE id=$1`;
        return db
        .one(query,values)
        .then((res) => res )
        .catch((err) => err );
    },
};

module.exports = { ViewUser };