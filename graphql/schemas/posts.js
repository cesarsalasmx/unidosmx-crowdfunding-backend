const graphql = require ("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = graphql;
const {
    GraphQLDate
} = require("graphql-iso-date");

const GetPost = GraphQLObjectType({
    name: "GetPost",
    type: "query",
    fields:{
        id: { type: GraphQLInt },
        author: { type: GraphQLInt },
        date: { type: GraphQLDate },
        content: { type: GraphQLString },
        title: { type: GraphQLString },
        status: { type: GraphQLInt },
        image: { type: GraphQLString },
        category: { type: GraphQLString },
    }
});

const AddPost = GraphQLObjectType({
    name: "AddPost",
    type: "mutation",
    fields:{
        id: { type: GraphQLInt },
        author: { type: GraphQLInt },
        date: { type: GraphQLDate },
        content: { type: GraphQLString },
        title: { type: GraphQLString },
        status: { type: GraphQLInt },
        image: { type: GraphQLString },
        category: { type: GraphQLString },
    }
})
module.exports = { GetPost, AddPost}