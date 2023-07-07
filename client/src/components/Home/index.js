import React, { useState, useEffect } from 'react';

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
        fetchStories();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-4 text-center">Welcome to StoryShare!</h1>
            <p className="text-lg text-center mb-4">A place where you can share your stories and read stories from others!</p>
            <p className="text-md text-center">Explore our prompts, read stories, or login/signup to start sharing your own.</p>

            <div className="mt-8">
                {stories.map(story => (
                    <div key={story.id} className="mb-4">
                        <h2 className="text-xl font-bold">{story.title}</h2>
                        <p className="text-md">{story.body.substring(0, 100)}...</p>  {/* Preview the first 100 characters of the story */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
