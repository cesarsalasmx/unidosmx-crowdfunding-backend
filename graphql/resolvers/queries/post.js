const { db } = require("../../../lib/postgres");
const { GraphQLString } = require("graphql");
const GetPost = require("../../schemas/posts").GetPost;

const PostQuery = {
    type: GetPost,
    args: { slug: { type: GraphQLString }},
    resolve(parentValue, args){
        const values = [args.slug];
        const query = `SELECT id, author, date, content, title, slug, id_status, id_type, image, category FROM public.posts WHERE slug=$1`;
        return db
        .one(query,values)
        .then((res) => res )
        .catch((err) => err );
    },
};

module.exports = { PostQuery };