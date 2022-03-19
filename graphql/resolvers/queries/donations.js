const { db } = require("../../../lib/postgres");
const {
    GraphQLID
} = require("graphql");
const GetDonation = require("../../schemas/Donations").GetDonation;

const DonationQuery = {
    type: GetDonation,
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

module.exports = DonationQuery;