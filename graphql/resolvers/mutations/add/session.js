const { db } = require("../../../../lib/postgres");
const {
    GraphQLString,
} = require ("graphql");
const { AddSession } = require("../../../schemas/sessions");

const AddSessionMutation = {
    type: AddSession,
    args: {
        page_name: { type: GraphQLString },
        ip: { type: GraphQLString },
        browser: { type: GraphQLString },
        device: { type: GraphQLString },
        referrer: { type: GraphQLString },
    },
    resolve(parentValue, args){
        let date = new Date(); 
        const values = [
            args.ip,
            args.browser,
            date,
            args.device,
            args.referrer,
            args.page_name,
        ];
        const query = "INSERT INTO public.sessions(ip, browser, date, device, referrer, page_name)	VALUES ($1, $2, $3, $4, $5, $6) RETURNING id";
        return db
            .one(query, values)
            .then((res) => res)
            .catch((err) =>err);
    },
};

module.exports = { AddSessionMutation };