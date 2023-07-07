import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const AnimatedModal = styled(animated.div)`
background-color: rgba(0, 0, 0, 0.8);
  padding: 3em;
  height: 550px;
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const SignUpModal = ({ onClose, onSignUpSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const springProps = useSpring({
        opacity: 1,
        transform: "translateX(0)",
        from: { opacity: 0, transform: "translateX(100%)" },
        config: { tension: 0, friction: 0, }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // call API to register the user
        // await signUp({ username, password });

        // If signup is successful, handle it in the parent component
        onSignUpSuccess({ username });
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-40" aria-hidden="true"></div>
            <AnimatedModal style={springProps} className="rounded-lg px-4 pt-5 pb-4 text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6 bg-app-color text-inside font-marvel">
                <h3 className="text-3xl leading-6 font-bold text-inside text-stroke-black">
                    Sign Up
                </h3>
                <form onSubmit={handleSubmit} className="mt-4">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 placeholder-gray-500 text-black text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-button-pink mb-2" required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 placeholder-gray-500 text-black text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-button-pink mb-4" required />
                    <button type="submit" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-button-pink text-xl font-medium text-inside hover:bg-button-yellow hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-button-yellow sm:text-lg">Sign Up</button>
                </form>
                <p className="mt-4 text-lg">Already have an account? <Link to="/login" className="text-app-color hover:underline" onClick={onClose}>Log in to StoryShare</Link></p>
                <button type="button" className="mt-5 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-app-color text-xl font-medium text-inside hover:bg-button-yellow hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-button-yellow sm:text-lg" onClick={onClose}>Close</button>
            </AnimatedModal>
        </div>
    );
};

export default SignUpModal;
