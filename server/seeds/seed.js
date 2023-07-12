const db = require('../config/connection');
const { Comment, Story, User, Prompt } = require('../models');
const commentSeeds = require('./commentSeeds.json');
const storySeeds = require('./storySeeds.json');
const userSeeds = require('./userSeeds.json');
const promptSeeds = require('./promptSeeds')

db.once('open', async () => {
    try {
        await Comment.deleteMany({});
        await Story.deleteMany({});
        await User.deleteMany({});
        await Prompt.deleteMany({});

        await User.create(userSeeds);
        await Story.create(storySeeds);
        await Comment.create(commentSeeds);
        await Prompt.create(promptSeeds);
        console.log("All seeds have been successfully added to the database!");

    }   catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Data seeded');
    process.exit(0);
});