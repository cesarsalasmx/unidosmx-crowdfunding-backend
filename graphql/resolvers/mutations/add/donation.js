const db = require("../../../../lib/postgres");
const {
    GraphQLInt,
    GraphQLString,
} = require ("graphql");
const { GraphQLDate } = require("graphql-iso-date");
const AddDonation = require("../../../schemas/Donations").AddDonation;

const AddDonationMutation = {
    type: AddDonation,
    args: {
        user_id: { type: GraphQLInt },
        post_id: { type: GraphQLInt },
        date: {type: GraphQLDate },
        status: { type: GraphQLString },
        amount: { type: GraphQLString },
        id_payment: { type: GraphQLString },
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

modele.exports = AddDonationMutation;