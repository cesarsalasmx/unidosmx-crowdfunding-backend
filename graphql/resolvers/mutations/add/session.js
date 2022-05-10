const db = require("../../../../lib/postgres");
const {
    GraphQLInt,
    GraphQLString,
} = require ("graphql");
const { GraphQLDate } = require("graphql-iso-date");
const AddSession = require("../../../schemas/sessions").AddSession;

const AddSessionMutation = {
    type: AddSession,
    args: {
        page_name: { type: GraphQLString },
        ip: { type: GraphQLString },
        browser: { type: GraphQLString },
        date: { type: GraphQLDate },
        device: { type: GraphQLString },
        referrer: { type: GraphQLString },
    },
    resolve(parentValue, args){
        const values = [
            args.page_name,
            args.ip,
            args.browser,
            args.date,
            args.device,
            args.referrer,
        ];
        const query = "INSERT INTO public.sessions(ip, browser, date, device, referrer, page_name)	VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING";
        return db
            .one(query, values)
            .then((res) => res)
            .catch((err) => err);
    },
};

module.exports = { AddSessionMutation };