const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
            autopopulate: true
        }
    ]
});

postSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Post', postSchema);