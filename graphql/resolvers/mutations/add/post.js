const { db } = require("../../../../lib/postgres");

const {
    GraphQLInt,
    GraphQLString
} = require ("graphql");
const { GraphQLDate } = require("graphql-iso-date");
const AddPost = require("../../../schemas/posts").AddPost;

const AddPostMutation = {
    type: AddPost,
    args: {
        author: { type: GraphQLInt },
        date: { type: GraphQLDate },
        content: { type: GraphQLString },
        title: { type: GraphQLString },
        status: { type: GraphQLInt },
        image: { type: GraphQLString },
        category: { type: GraphQLString },
    },
    resolve(parentValue, args){
        var slug = args.slug.toLowerCase().split(' ').join('-');
        const values = [args.content,args.title,slug,args.image,args.category];
        
        const query = "INSERT INTO public.posts( author, date, content, title, slug, id_status, id_type, image, category) VALUES ('1', '02-05-2022', $1, $2, $3, 5, 5, $4, $5) RETURNING slug;";
        return db
            .one(query, values)
            .then((res) => res)
            .catch((err) => err);
    },
};

module.exports = { AddPostMutation };