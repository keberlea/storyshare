import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // call API to login the user
        // await login({ username, password });

        // If login is successful, redirect to home page
        navigate("/home");
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div>
                        <div className="mt-3 text-center sm:mt-5">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Login
                            </h3>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="my-2 px-4 w-full h-12 border border-gray-300 rounded" required />
                                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="my-2 px-4 w-full h-12 border border-gray-300 rounded" required />
                                    <button type="submit" className="mt-4 bg-button-yellow text-black px-4 py-2 rounded font-marvel">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                        <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-button-yellow text-base font-medium text-black hover:app-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;