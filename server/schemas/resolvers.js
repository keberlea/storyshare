const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    // Query
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId }) => {
            return User.findOne({_id: userId});
        }
        }
    //Mutation

        //addProfile

        //login

        //addStory ?

        //addPrompt ?

        //removeProfile?

        //removeStory?

        //remove Prompt?

}

module.exports = resolvers;