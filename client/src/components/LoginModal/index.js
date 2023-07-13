import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const AnimatedModal = styled(animated.div)`
background-color: rgba(0, 0, 0, 0.8);
  padding: 3em;
  height: 550px;
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const LoginModal = ({ onClose, onLoginSuccess, onNavigateToSignup }) => {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error, }] = useMutation(LOGIN_USER);

    const springProps = useSpring({
        opacity: 1,
        transform: "translateX(0)",
        from: { opacity: 0, transform: "translateX(100%)" },
        config: { tension: 0, friction: 0, }
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            console.log(data)
            Auth.login(data.login.token);
            onLoginSuccess(); // Call the success callback
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            username: '',
            password: '',
        });
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-40" aria-hidden="true"></div>
            <AnimatedModal style={springProps} className="rounded-lg px-4 pt-5 pb-4 text-center overflow-hidden 
            shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6 bg-app-color text-inside font-marvel">
                <h3 className="text-3xl leading-6 font-bold text-inside text-stroke-black">
                    Login
                </h3>
                <form
                    onSubmit={handleSubmit} className="mt-4">
                    <input type="text" name="username" placeholder="Username" value={formState.username} onChange={handleChange}
                        className="w-full px-3 py-2 placeholder-gray-500 text-black text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-button-pink mb-2" required />
                    <input type="password" name="password" placeholder="Password" value={formState.password}
                        onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-500
                      text-black text-xl border rounded-md focus:outline-none focus:ring-2
                       focus:ring-button-pink mb-4" required />
                    <button type="submit" className="inline-flex justify-center w-full
                     rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink text-xl font-medium 
                     text-inside hover:bg-button-yellow hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-button-yellow sm:text-lg">Login</button>
                </form>
                {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                    </div>
                )}
                <p className="mt-4 text-lg">Don't have an account? <span className="text-app-color hover:underline cursor-pointer" onClick={onNavigateToSignup}>
                    Sign up for StoryShare
                </span>
                </p>
                <button type="button" className="mt-5 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-app-color text-xl font-medium text-inside hover:bg-button-yellow hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-button-yellow sm:text-lg" onClick={onClose}>Close</button>
            </AnimatedModal>
        </div>
    );
};

export default LoginModal;
