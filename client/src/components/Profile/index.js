import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';

const Profile = () => {
    const currentUser = Auth.getUser();
    console.log('User:', currentUser);
    const { loading, data, error } = useQuery(QUERY_USER, {
        variables: { storyAuthor: currentUser.data.username }, // Access the username from currentUser
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

            {user && user.stories.length > 0 ? (   //If user is truthy and user.stories.length is greater than 0, 
                user.stories.map((story) => (      // the condition evaluates to true, and the code block will execute
                    <div key={story.id} className="story-container">
                        <div

                            className="bg-pink font-marvel font-bold rounded-lg shadow-md cursor-pointer p-4 hover:bg-yellow transition duration-300"
                        >
                            <h3 className="text-4xl hover:text-black text-black ">
                                {story.title}
                            </h3>
                            <p>{story.content}</p>
                            <p>{story.createdAt}</p>
                        </div>
                    </div>


                ))
            ) : (
                <div>No stories found</div>
            )}
        </div>
    );
};

export default Profile;
