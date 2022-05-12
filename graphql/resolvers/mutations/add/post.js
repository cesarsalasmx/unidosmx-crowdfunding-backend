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
        content: { type: GraphQLString },
        title: { type: GraphQLString },
        image: { type: GraphQLString },
        category: { type: GraphQLString },
    },
    resolve(parentValue, args){
        var slug = args.title.toLowerCase().split(' ').join('-');
        let date = new Date(); 
        const values = [
            '1',
            date,
            args.content,
            args.title,
            slug,
            5,
            8,
            args.image,
            args.category
        ];
        const query = "INSERT INTO public.posts( author, date, content, title, slug, id_status, id_type, image, category) VALUES ($1, $2, $3, $4, $5,$6,$7,$8,$9) RETURNING slug;";
        return db
            .one(query, values)
            .then((res) => res)
            .catch((err) => err);
    },
};

module.exports = { AddPostMutation };