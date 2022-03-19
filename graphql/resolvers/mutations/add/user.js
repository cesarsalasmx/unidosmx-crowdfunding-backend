const db = require("../../../../lib/postgres");
const {
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
} = require ("graphql");
const { GraphQLDate } = require("graphql-iso-date");
const AddUser = require("../../../schemas/users").AddUser;

const AddUserMutation = {
    type: AddUser,
    args: {
        first_nane: { type: GraphQLString },
        last_name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        date_registration: { type: GraphQLDate },
        birthday: { type: GraphQLDate },
        id_genders: { type: GraphQLInt },
        status: { type: GraphQLBoolean },
        id_roles: { type: GraphQLInt },
        country: { type: GraphQLString },
    },
    resolve(parentValue, args){
        const values = [];
        const query = "";
        return db
            .one(query, values)
            .then((res) => res)
            .catch((err) => err);
    },
};

modele.exports = AddUserMutation;