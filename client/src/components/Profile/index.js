import React from 'react';

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <div className="story-container">
                <section className="story-title">
                    <h2>Title</h2>
                </section>
                <section className="created-on">
                    <p>Created on: </p>
                </section>
                <section className="prompt">
                    <p>Prompt: </p>
                </section>
                <section className="story-content"></section>
            </div>
            <div className="comment-container">
                <section className="comment">
                    <p>Comment: </p>
                </section>
            </div>
            <div className="update-delete">
                <button>Update</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Profile;