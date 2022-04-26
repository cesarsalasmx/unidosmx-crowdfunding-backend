const graphql = require ("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = graphql;
const {
    GraphQLDate
} = require("graphql-iso-date");

const GetPost = new GraphQLObjectType({
    name: "GetPost",
    type: "query",
    fields:{
        id: { type: GraphQLInt },
        author: { type: GraphQLInt },
        date: { type: GraphQLDate },
        content: { type: GraphQLString },
        title: { type: GraphQLString },
        status: { type: GraphQLInt },
        slug: { type: GraphQLString },
        image: { type: GraphQLString },
        category: { type: GraphQLString },
    }
});
const GetAllPosts = new GraphQLObjectType({
    name: "GetAllPosts",
    type: "query",
    fields:{
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        date: { type: GraphQLDate },
        content: { type: GraphQLString },
        title: { type: GraphQLString },
        value: { type: GraphQLString },
        slug: { type: GraphQLString },
        image: { type: GraphQLString },
        category: { type: GraphQLString },
    }
});
const AddPost = new GraphQLObjectType({
    name: "AddPost",
    type: "mutation",
    fields:{
        id: { type: GraphQLInt },
        author: { type: GraphQLInt },
        date: { type: GraphQLDate },
        content: { type: GraphQLString },
        title: { type: GraphQLString },
        slug: { type: GraphQLString },
        status: { type: GraphQLInt },
        image: { type: GraphQLString },
        category: { type: GraphQLString },
    }
})
module.exports = { GetPost, AddPost, GetAllPosts}