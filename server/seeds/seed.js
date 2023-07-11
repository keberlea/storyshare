const db = require('../config/connection');
const { Comment, Story, User } = require('../models');
const commentSeeds = require('./commentSeeds.json');
const storySeeds = require('./storySeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
    try {
        await Comment.deleteMany({});
        await Story.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);

        for (let i = 0; i < storySeeds.length; i++) {
          const { _id, storyAuthor } = await Story.create(storySeeds[i]);
          const user = await User.findOneAndUpdate(
            { username: storyAuthor },
            {
                $addToSet: {
                    stories: _id,
                },
            }
          );
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
        }
    }   catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Data seeded');
    process.exit(0);
});