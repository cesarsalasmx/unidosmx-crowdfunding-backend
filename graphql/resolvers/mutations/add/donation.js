const { db } = require("../../../../lib/postgres");
const {
    GraphQLInt,
    GraphQLString,
} = require ("graphql");
const AddDonation = require("../../../schemas/donations").AddDonation;

const AddDonationMutation = {
    type: AddDonation,
    args: {
        user_id: { type: GraphQLInt },
        post_id: { type: GraphQLInt },
        amount: { type: GraphQLString },
    },
    resolve(parentValue, args){
        let date = new Date();
        const values = [
            args.user_id,
            args.post_id,
            date,
            "Fallido",
            args.amount,
            ""];
        const query = "INSERT INTO public.donations(user_id, post_id, date, status, amount, id_payment) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id";
        return db
            .one(query, values)
            .then((res) => res)
            .catch((err) => err);
    },
};

module.exports = { AddDonationMutation };