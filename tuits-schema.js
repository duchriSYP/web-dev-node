import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    postedBy: {
        username: String
    },
    handle: String,
    logo: String,
    avatar: String,
    stats: {
        retuits: Number,
        likes: Number,
        comments: Number,
        dislikes: Number
    },
    liked: Boolean,
    disliked: Boolean,
    likes: Number,
    dislikes: Number
}, { collection: 'tuits' });

export default schema;