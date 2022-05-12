const { db } = require("../../../lib/postgres");
const {
    GraphQLID,
    GraphQLList
} = require("graphql");
const GetSessions = require("../../schemas/sessions").GetSessions;

const AllSessionsQuery = {
    type: GraphQLList(GetSessions),
    resolve(parentValue, args){
        const values = true;
        const query = `SELECT * FROM sessions`;
        return db
        .many(query,values)
        .then((res) => res )
        .catch((err) => err );
    },
};

module.exports = { AllSessionsQuery };