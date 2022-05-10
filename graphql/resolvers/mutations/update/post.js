const { db } = require("../../../../lib/postgres");
const {
    GraphQLID,
    GraphQLInt,
    GraphQLString
} = require ("graphql");
const { GraphQLDate } = require("graphql-iso-date");
const AddPost = require("../../../schemas/posts").AddPost;

const UpdatePostMutation = {
    type: AddPost,
    args: {
        id: { type: GraphQLID},
        date: { type: GraphQLDate },
        content: { type: GraphQLString },
        title: { type: GraphQLString },
        status: { type: GraphQLInt },
        image: { type: GraphQLString },
        category: { type: GraphQLString },
        slug: {type: GraphQLString},
    },
    resolve(parentValue, args){
        var slug = args.slug.toLowerCase().split(' ').join('-');
        const values = [
            args.date,
            args.content,
            args.title,
            slug,
            args.image,
            args.category,
            args.id
        ];
        
        const query = "UPDATE public.posts	SET date=$1, content=$2, title=$3, slug=$4, image=$5, category=$6	WHERE id=$7 RETURNING id";
        return db
            .one(query, values)
            .then((res) => res)
            .catch((err) => err);
    },
};

module.exports = { UpdatePostMutation };