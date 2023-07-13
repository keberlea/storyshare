//used User for all of these but thinking some may need to be other models?

const { AuthenticationError } = require('apollo-server-express');
const { User, Story, Prompt, Comment } = require('../models');
const { signToken } = require('../utils/auth');
console.log(Prompt);
const resolvers = {

    Query: {
        //all users
        //works
        users: async () => {
            return User.find();
        },

        //user by id
        //works
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },

        //stories by user User homepage
        //DW
        storiesByUser: async (_, args, { userId }) => {
            const user = await User.findById(userId)
            return user.stories
        },

        //all prompts home page
        //DW
        prompts: async () => {
            return Prompt.find({});
        },

        //prompt by id when selecting prompt
        prompt: async (parent, { promptId }) => {
            return Prompt.findOne({ _id: promptId });
        },

        //all stories
        stories: async () => {
            return Story.find();
        },

        //story by id when selecting story
        story: async (parent, { storyId }) => {
            return Story.findOne({ _id: storyId });
        },

        //comment by storyid
        commentsByStory: async (parent, { storyId }) => {
            return Comment.find().where('post').equals(`${storyId}`).populate('_author');
        },

        //comment by id when selecting comment
        comment: async (parent, { commentId }) => {
            return Comment.findByIdAndUpdate(
                { _id: commentId },
                { $inc: { commentCount: 1 } },
                { new: true }
            );
        },


    },

    Mutation: {

        createUser: async (parent, { username, password }) => {
            const user = await User.create({ username, password });
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { username, password }) => {
            try {
                console.log("username", username)
                let foundUser;
                [foundUser] = await Promise.all([User.findOne({
                    "$or": [{
                        username: username
                    }]
                })])

                console.log("foundUser", foundUser)
                if (!foundUser) {
                    throw new AuthenticationError('Incorrect credentials');
                }
                const correctPw = await foundUser.isCorrectPassword(password);
                if (!correctPw) {
                    throw new AuthenticationError('Incorrect credentials');
                }
                const token = signToken(foundUser);
                return { token, foundUser };
            } catch (err) {
                console.log(err)
            }
        },

        createStory: async (parent, { title, content, storyAuthor }) => {
            if (!title) {
                throw new Error('Title is required');
            }

            if (!content) {
                throw new Error('Content is required');
            }

            if (!storyAuthor) {
                throw new Error('Story author is required');
            }

            const newStory = await Story.create({ title, content, storyAuthor });
            return newStory;
        },

        createPrompt: async (parent, args, context, info) => {
            const { title, description, userId } = args;
            const updatedUser = await User.findByIdAndUpdate(userId, {
                $push: {
                    "prompts":
                        { title: title, description: description }
                }
            }, { new: true });
            return updatedUser;
        },

        createComment: async (parent, { content, userId, storyId }) => {
            const updatedUser = await User.findByIdAndUpdate(userId, {
                $push: {
                    "comments":
                        { content: content, storyId: storyId }
                }
            }, { new: true });
            return updatedUser;
        },

        //might need to change from a try catch statement?
        updateStory: async (parent, { userId, storyId, content }) => {
            try {
                let storiesArray = [];
                let updatedUser;
                updatedUser = await User.findById(userId);
                storiesArray = updatedUser.stories;
                storiesArray.forEach((story) => {
                    if (story._id === storyId) {
                        story.content = content;
                    }
                })
                console.log("updatedStories", storiesArray)
                updatedUser.save();
                return updatedUser;
            } catch (err) {
                console.log(err)
            }
        },

        // might need to change from a try catch statement?
        updateComment: async (parent, { userId, commentId, content }) => {
            try {
                let commentsArray = [];
                let updatedUser;
                updatedUser = await User.findById(userId);
                commentsArray = updatedUser.comments;
                commentsArray.forEach((comment) => {
                    if (comment._id === commentId) {
                        comment.content = content;
                    }
                })
                console.log("updatedComments", commentsArray)
                updatedUser.save();
                return updatedUser;
            }
            catch (err) {
                console.log(err)
            }
        },

        deleteUser: async (parent, { userId }) => {
            const userToRemove = await User.findByIdAndDelete({ _id: userId });
            return userToRemove;
        },

        deleteStory: async (parent, { userId, storyId }) => {
            const updatedUser = await User.findByIdAndUpdate(userId, {
                $pull: {
                    "stories":
                        { _id: storyId }
                }
            }, { new: true });
            return updatedUser;
        },


    }
};

module.exports = resolvers;