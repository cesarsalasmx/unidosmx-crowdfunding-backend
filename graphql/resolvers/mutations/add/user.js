const { db } = require("../../../../lib/postgres");
const {
    GraphQLString,
} = require ("graphql");
const { GraphQLDate } = require("graphql-iso-date");
const AddUser = require("../../../schemas/users").AddUser;

const AddUserMutation = {
    type: AddUser,
    args: {
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        date_registration: { type: GraphQLDate },
        birthday: { type: GraphQLDate },
        gender: { type: GraphQLString },
        roles: { type: GraphQLString },
        country: { type: GraphQLString },
    },
    async resolve (parentValue, args){
        let username = args.first_nane+"_"+args.last_name;
        let id_gerders = await db.one("SELECT id FROM public.options WHERE name='opc_gender' AND value=$1 LIMIT 1",[args.gender]);
        let id_rol = await db.one("SELECT id FROM public.options WHERE name='opc_roles' AND value=$1 LIMIT 1",[args.roles]);
        let date_registration = new Date(); 
        const values = [
            args.first_name,
            args.last_name,
            username,
            args.email,
            args.password,
            date_registration,
            args.birthday,
            id_gerders.id,
            true,
            id_rol.id,
            args.country
        ];
        console.log(values);
        const query = "INSERT INTO public.users(first_name, last_name, username, email, password, date_registration, birthday, id_gender, status, id_role, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id";
        return db
            .one(query, values)
            .then((res) => res)
            .catch((err) => err);
    },
};

module.exports = { AddUserMutation };