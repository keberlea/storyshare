const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
});

/*Schema created. Code involving bcrypt for password authentication 
needs to be written */

const User = model('User', userSchema);

module.exports = User;