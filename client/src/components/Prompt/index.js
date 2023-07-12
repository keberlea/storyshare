import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PROMPTS } from '../../utils/queries';
import { CREATE_STORY } from '../../utils/mutations';
import styled from 'styled-components';

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
`;

const Prompt = () => {
  const [selectedPromptId, setSelectedPromptId] = useState(null);
  const { loading, data } = useQuery(QUERY_PROMPTS);
  const prompts = data?.prompts || [];

  const handlePromptSelection = (promptId) => {
    setSelectedPromptId(promptId);
  };

  const [createStory] = useMutation(CREATE_STORY);

  const handleStorySubmit = (e) => {
    e.preventDefault();
    // Get the story value from the form input field
    const story = e.target.elements.story.value;
    // Call the mutation to add the story to the database
    createStory({
      variables: { promptId: selectedPromptId, story },
    })
      .then(() => {
        // Handle successful story submission, e.g., show a success message
        console.log('Story submitted successfully');
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error('Error submitting story:', error);
      });
  };

  return (
    <div className="bg-app-color min-h-screen">
      <h1 className="text-8xl font-lobster text-app-color text-center py-4 bg-black">
        Prompts
      </h1>
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <p>Loading prompts...</p>
          ) : (
            prompts.map((prompt) => (
              <div
                key={prompt.id}
                className="bg-pink font-marvel font-bold rounded-lg shadow-md cursor-pointer p-4 hover:bg-yellow transition duration-300"
                onClick={() => handlePromptSelection(prompt.id)}
              >
                <p className="text-4xl hover:text-black text-black ">
                  {prompt.description.slice(0, 100)}
                </p>
              </div>
            ))
          )}
        </div>
        {
          selectedPromptId && (
            <div className="mt-8">
              <h2 className="text-3xl font-bold mb-4">Selected Prompt:</h2>
              <p className="text-xl mb-4">Prompt ID: {selectedPromptId}</p>
              <form onSubmit={handleStorySubmit}>
                <label htmlFor="story" className="block text-xl mb-2">
                  Story:
                </label>
                <textarea
                  id="story"
                  name="story"
                  className="w-full p-4 border border-gray-300 rounded-lg resize-none"
                  required
                ></textarea>
                <ButtonContainer>
                  <StyledButton type="submit">Submit Story</StyledButton>
                </ButtonContainer>
              </form>
            </div>
          )
        }
      </div >
    </div >
  );
};

export default Prompt;