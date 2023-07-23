const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
     username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
     },
     email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
     },
     thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
     ],
     friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
     ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);
// need tio create virtual for friends
const User = model('user', userSchema);

module.exports = User;