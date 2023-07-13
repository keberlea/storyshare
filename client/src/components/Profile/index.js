import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_STORIES } from '../../utils/queries';
import { UPDATE_STORY, DELETE_STORY } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Profile = () => {
    const currentUser = Auth.getUser(); // Retrieves current user's info from auth
    const { loading, data, error } = useQuery(QUERY_USER, QUERY_STORIES, {
        variables: { username: currentUser.username },

    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error("Error fetching user's stories:", error);
        return <div>Error fetching stories</div>;
    }
    const user = data?.user;
    const stories = user?.stories;

    return (
        <div>
            <h1>Profile</h1>
            {stories?.map((story) => (
                <div key={story._id} className="story-container">
                    <section className="story-title">
                        <h2>{story.title}</h2>
                    </section>
                    <section className="created-on">
                        <p>Created on: {story.createdAt}</p>
                    </section>
                    <section className="prompt">
                        <p>Prompt: {story.prompt}</p>
                    </section>
                    <section className="story-content">{story.content}</section>
                    <div className="update-delete">
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Profile;