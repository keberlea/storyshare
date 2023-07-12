import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  transition: transform .2s;
  box-shadow: 0px 4px 10px 3px rgba(0,0,0,0.75);
  margin: 0 10px;
  &:hover {
    transform: scale(1.1);
  }
`;


const Home = () => {
    const [stories, setStories] = useState([]);

    const fetchStories = async () => {
        try {
            const response = await fetch('/api/stories'); // Update this with actual API endpoint
            const data = await response.json();
            setStories(data);
        } catch (error) {
            console.error('Failed to fetch stories:', error);
        }
    }

    useEffect(() => {
        //      fetchStories();
    }, []);

    return (
        <div className="bg-app-color min-h-screen">
            <h1 className="text-8xl font-lobster text-app-color text-center py-4 bg-black">
                Welcome to StoryShare!
            </h1>
            <p className="text-6xl font-bold text-center mb-4 font-marvel">
                A place where you can share your stories and read stories from others!
            </p>
            <p className="text-6xl font-bold  text-center font-marvel">
                Explore our prompts, read stories, or login/signup to start sharing your own.
            </p>
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className="bg-pink font-marvel font-bold rounded-lg shadow-md cursor-pointer p-4 hover:bg-yellow transition duration-300"
                        >
                            <h2 className="text-4xl hover:text-black text-black">
                                {story.title}
                            </h2>
                            <p>{story.body.substring(0, 100)}...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;