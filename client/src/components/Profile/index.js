import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';

const Profile = () => {
    const currentUser = Auth.getUser();
    const { loading, data, error } = useQuery(QUERY_USER, {
        variables: { username: currentUser?.data?.username }, // Access the username from currentUser safely
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div>An error occurred</div>;
    }

    const user = data?.user;

    return (
        <div>
            <h1>Profile</h1>
            {user && user.stories.length > 0 ? (
                user.stories.map((story) => (
                    <div key={story.id} className="story-container">
                        <section className="story-title">
                            <h2>{story.title}</h2>
                        </section>
                        <section className="created-on">
                            <p>Created on: {story.createdAt}</p>
                        </section>
                        <section className="prompt">
                            <p>Prompt: {story.prompt}</p>
                        </section>
                        <section className="story-content">
                            <p>{story.content}</p>
                        </section>
                    </div>
                ))
            ) : (
                <div>No stories found</div>
            )}
        </div>
    );
};

export default Profile;
