import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_STORIES, QUERY_PROMPTS } from '../../utils/queries';
import { CREATE_STORY } from '../../utils/mutations';
import styled from 'styled-components';
//when on the /stories page we want to load all the stories in the database
// we want to be able to display each story with it's title, username (as author) , createdAt, the prompt and the storyText
// when we click on the story, we want to be able to see the same information plus the story comments
// we want to be able to add a comment to the story

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledButton = styled.button`
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 2rem;
  background-color: #ff69b4;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.75);

  &:hover {
    transform: scale(1.1);
  }
`

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
            console.log("error")
            console.error(err);
        }

    };
    if (storiesLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="bg-app-color min-h-screen">
            <h1 className="text-8xl font-lobster text-app-color text-center py-4 bg-black">
                Stories
            </h1>
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className="bg-pink font-marvel font-bold rounded-lg shadow-md cursor-pointer p-4 hover:bg-yellow transition duration-300"
                        >
                            <h3 className="text-4xl hover:text-black text-black ">
                                {story.title}
                            </h3>
                            <p>{story.content}</p>
                            <p>{story.createdAt}</p>
                            <p>{story.username}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <h2 className="text-3xl font-bold mb-4">Add Story:</h2>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="storyTitle" className="block text-xl mb-2">
                            Title:
                        </label>
                        <input
                            type="text"
                            id="storyTitle"
                            name="title"
                            placeholder="Title"
                            className="w-full p-4 border border-gray-300 rounded-lg"
                            required
                        />
                        <label htmlFor="content" className="block text-xl mb-2">
                            Story:
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            placeholder="Story"
                            className="w-full p-4 border border-gray-300 rounded-lg resize-none"
                            required
                        ></textarea>
                        <ButtonContainer>
                            <StyledButton type="submit">Submit Story</StyledButton>
                        </ButtonContainer>
                    </form>
                </div>
            </div>
        </div>
    );
};



export default Stories;