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

        for (let i = 0; i < storySeeds.length; i++) {
            const { title, content, storyAuthor } = storySeeds[i];
            const { _id } = await Story.create({ title, content, storyAuthor });
          
            const user = await User.findOneAndUpdate(
              { username: storyAuthor },
              {
                $addToSet: {
                  stories: _id,
                },
              }
            );
          
            console.log(`${storyAuthor}'s story '${title}'and '${content}' has been added to the database!`);
          }

        for (let i = 0; i < commentSeeds.length; i++) {
            const { _id, commentAuthor } = await Comment.create(commentSeeds[i]);
            const users = await User.findOneAndUpdate(
                { username: commentAuthor },
                {
                    $addToSet: {
                        comments: _id,
                    },
                }
            );
            console.log(
                `${commentAuthor} has been added to the database!`
            )
        }

        for (let i = 0; i < promptSeeds.length; i++) {
            const { _id, description } = await Prompt.create(promptSeeds[i]);
            const users = await User.findOneAndUpdate(
                { description: description },
                {
                    $addToSet: {
                        prompts: _id,
                    },
                }
            );
            console.log(
                `${description} has been added to the database!`
            )
        }

    }   catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Data seeded');
    process.exit(0);
});