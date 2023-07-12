import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_STORIES, QUERY_PROMPTS } from '../../utils/queries';
import { CREATE_STORY } from '../../utils/mutations';

//when on the /stories page we want to load all the stories in the database
// we want to be able to display each story with it's title, username (as author) , createdAt, the prompt and the storyText
// when we click on the story, we want to be able to see the same information plus the story comments
// we want to be able to add a comment to the story


const Stories = () => {
    const { loading: storiesLoading, data: storiesData } = useQuery(QUERY_STORIES);
    const stories = storiesData?.stories || [];


    //create mutation for adding new story
    const [createStory] = useMutation(CREATE_STORY);
    //create function to handle form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const title = formData.get('storyTitle');
        //const prompt = formData.get('prompt');
        const content = formData.get('storyText');

        try {
            const { data } = await createStory({
                variables: { title, prompt, content },
                refetchQueries: [{ query: QUERY_STORIES }],
            });
            console.log(data);
        } catch (err) {
            console.error(err);
        }

    };
    if (storiesLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Stories</h1>
            <div>
                {stories.map((story) => (
                    <div key={story.id}>
                        <h3>{story.title}</h3>
                        <p>{story.content}</p>
                        <p>{story.createdAt}</p>
                        <p>{story.username}</p>
                    </div>
                ))}
            </div>
            <div>
                <h2>Add Story</h2>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="storyTitle"
                            name="title"
                            placeholder="Title"
                        />
                    </div>
                    <div>
                        <label htmlFor="content">Story:</label>
                        <input
                            type="text"
                            id="content"
                            name="content"
                            placeholder="Story"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}


export default Stories;