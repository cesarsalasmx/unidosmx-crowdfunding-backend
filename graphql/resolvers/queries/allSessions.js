const { db } = require("../../../lib/postgres");
const {
    GraphQLID
} = require("graphql");
const GetSessions = require("../../schemas/Sessions").GetSessions;

const AllSessionsQuery = {
    type: GetSessions,
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

module.exports = AllSessionsQuery;