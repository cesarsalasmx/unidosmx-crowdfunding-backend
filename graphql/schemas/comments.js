const graphql = require ("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = graphql;
const {
    GraphQLDate
} = require("graphql-iso-date");

const GetComments = GraphQLObjectType ({
    name: "GetComments",
    type: "query",
    fields:{
        id: { type: GraphQLInt },
        id_post: { type: GraphQLInt },
        id_author: { type: GraphQLInt },
        author: { type: GraphQLString },
        author_email: { type: GraphQLString },
        author_ip: { type: GraphQLString },
        date: { type: GraphQLDate },
        content: { type: GraphQLString },
        status: { type: GraphQLInt },
    }
});
const AddComment = GraphQLObjectType({
    name: "AddComment",
    type: "mutation",
    fields: {
        id: { type: GraphQLInt },
        id_post: { type: GraphQLInt },
        id_author: { type: GraphQLInt },
        author: { type: GraphQLString },
        author_email: { type: GraphQLString },
        author_ip: { type: GraphQLString },
        date: { type: GraphQLDate },
        content: { type: GraphQLString },
        status: { type: GraphQLInt },
    }
});

module.exports = { GetComments, AddComment };