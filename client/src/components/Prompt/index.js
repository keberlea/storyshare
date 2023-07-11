import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PROMPTS} from '../../utils/queries';
import { CREATE_STORY } from '../../utils/mutations';



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
    <div>
      <h1>Prompt</h1>
      <div className="prompt-container">
        {loading ? (
          <p>Loading prompts...</p>
        ) : (
          <div>
            {prompts.map((prompt) => (
              <section
                key={prompt.id}
                className="prompt"
                onClick={() => handlePromptSelection(prompt.id)}
              >
                <p>Prompt: {prompt.text.slice(0, 100)}</p>
              </section>
            ))}
          </div>
        )}

        {selectedPromptId && (
          <div>
            <h2>Selected Prompt:</h2>
            <p>Prompt ID: {selectedPromptId}</p>
            <form onSubmit={handleStorySubmit}>
              <label htmlFor="story">Story:</label>
              <textarea id="story" name="story" required />
              <button type="submit">Submit Story</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt;
