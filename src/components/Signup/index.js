import React, { useState } from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // form submission - make a request to backend
        console.log(`User: ${username}, Password: ${password}`);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-app-color">
            <form className="flex flex-col w-80 p-6 bg-foot-color rounded-lg" onSubmit={handleFormSubmit}>
                <label className="mb-4 font-marvel text-inside">
                    Username
                    <input
                        className="w-full p-2 mt-1 border-none rounded-md"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>

                <label className="mb-4 font-marvel text-inside">
                    Password
                    <input
                        className="w-full p-2 mt-1 border-none rounded-md"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <button className="p-2 text-inside font-bold bg-button-pink border-none rounded-md cursor-pointer" type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signup;