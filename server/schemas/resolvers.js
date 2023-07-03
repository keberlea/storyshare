//used User for all of these but thinking some may need to be other models?

const { AuthenticationError } = require('apollo-server-express');
const { User, Story, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId }) => {
            return User.findOne({_id: userId});
        }
        },
    
    Mutation:{
        
        createUser: async (parent, { username, password }) => {
            const user = await User.create({ username, password });
            const token = signToken(user);
            return { token, user };
        },
        
        login: async (parent, { username, password }) => {
            try{
                console.log("username", username)
                let foundUser;
                [foundUser]  =await Promise.all([User.findOne({"$or":[{
                    username: username
                }]})])
                                  
                console.log("foundUser", foundUser)
                if(!foundUser){
                    throw new AuthenticationError('Incorrect credentials');
                }
                const correctPw = await foundUser.isCorrectPassword(password);
                if(!correctPw){
                    throw new AuthenticationError('Incorrect credentials');
                }
                const token = signToken(foundUser);
                return { token, foundUser };
            }catch(err){
                console.log(err)
            }
        },
       
        createStory: async (parent, { userId, content }) => {
            const updatedUser = await User.findByIdAndUpdate(userId,{ $push : {"stories" :
            {content: content}}}, {new: true});
            return updatedUser;
        },

        createPrompt: async (parent, args, context, info ) =>{
            const {title, description, userId} = args;
            const updatedUser = await User.findByIdAndUpdate(userId,{ $push : {"prompts" :
            {title: title, description: description}}}, {new: true});
            return updatedUser;
        },  

        createComment: async (parent, { content, userId, storyId }) => {
            const updatedUser = await User.findByIdAndUpdate(userId,{ $push : {"comments" :
            {content: content, storyId: storyId}}}, {new: true});
            return updatedUser;
        },

        //might need to change from a try catch statement?
        updateStory: async (parent, { userId, storyId, content }) => {
            try{
                let storiesArray=[];
                let updatedUser;
                updatedUser = await User.findById(userId);
                storiesArray = updatedUser.stories;
                storiesArray.forEach((story)=>{
                    if(story._id == storyId){
                        story.content = content;
                    }
                })
                console.log("updatedStories",storiesArray)
                updatedUser.save();
                return updatedUser;
            }catch(err){
                console.log(err)
            }
        },

        // might need to change from a try catch statement?
        updatePrompt: async (parent, { userId, promptId, title, description }) => {
            try{
                let promptsArray=[];
                let updatedUser;
                updatedUser = await User.findById(userId);
                promptsArray = updatedUser.prompts;
                promptsArray.forEach((prompt)=>{
                    if(prompt._id == promptId){
                        prompt.title = title;
                        prompt.description = description;
                    }
                })
                console.log("updatedPrompts",promptsArray)
                updatedUser.save();
                return updatedUser;
            }catch(err){
                console.log(err)
            }
        },

        // might need to change from a try catch statement?
        updateComment: async (parent, { userId, commentId, content }) => {
            try{
                let commentsArray=[];
                let updatedUser;
                updatedUser = await User.findById(userId);
                commentsArray = updatedUser.comments;
                commentsArray.forEach((comment)=>{
                    if(comment._id == commentId){
                        comment.content = content;
                    }
                })
                console.log("updatedComments",commentsArray)
                updatedUser.save();
                return updatedUser;
            }
            catch(err){
                console.log(err)
            }
        },

        deleteUser: async (parent, { userId }) => {
            const userToRemove= await User.findByIdAndDelete({_id:ObjectId(userId)});
            return userToRemove;
        },

        deleteStory: async (parent, { userId, storyId }) => {
            const updatedUser = await User.findByIdAndUpdate(userId,{ $pull : {"stories" :
            {_id: storyId}}}, {new: true});
            return updatedUser;
        },

        deletePrompt: async (parent, { userId, promptId }) => {
            const updatedUser = await User.findByIdAndUpdate(userId,{ $pull : {"prompts" :
            {_id: promptId}}}, {new: true});
            return updatedUser;
        },
    }
};

module.exports = resolvers;