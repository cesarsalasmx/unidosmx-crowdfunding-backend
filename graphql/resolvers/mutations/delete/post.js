const { db } = require("../../../../lib/postgres");
const {
    GraphQLID,
} = require ("graphql");
const AddPost = require("../../../schemas/posts").AddPost;

const DeletePostMutation = {
    type: AddPost,
    args: {id: { type: GraphQLID}},
    resolve(parentValue, args){
        const values = [7,args.id];
        const query = "UPDATE public.posts SET id_status=$1	WHERE id=$2 RETURNING id";
        return db
            .one(query, values)
            .then((res) => res)
            .catch((err) => err);
    },
};
module.exports = { DeletePostMutation };