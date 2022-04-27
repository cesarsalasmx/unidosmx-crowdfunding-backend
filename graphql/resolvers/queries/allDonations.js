const { db } = require("../../../lib/postgres");
const {
    GraphQLList
} = require("graphql");
const GetDonation = require("../../schemas/donations").GetDonation;

const AllDonationQuery = {
    type: GraphQLList(GetDonation),
    resolve(parentValue, args){
        const values = [];
        const query = `SELECT * FROM view_donations`;
        return db
        .one(query,values)
        .then((res) => res )
        .catch((err) => err );
    },
};

module.exports = { AllDonationQuery };