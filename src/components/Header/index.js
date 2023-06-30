import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = ({ activeTab, setActiveTab }) => {
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname.endsWith('/')
            ? location.pathname.slice(0, -1)
            : location.pathname;

        const currentTab = pathname === '' ? '/home' : pathname;
        setActiveTab(currentTab);
    }, [location, setActiveTab]);

    return (
        <header
            className="px-1 py-4 bg-header-blue text-black text-4xl"
        >
            <div className="flex justify-center text-8xl mb-6 font-licorice text-inside text-black-stroke">
                StoryShare
            </div>
            <nav className="flex flex-wrap justify-around">
                <NavLink
                    to="/home"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black font-marvel ${activeTab === '/home' ? 'underline font-bold' : ''} hover:bg-hover-pink hover:text-white`}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/signup"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black font-marvel ${activeTab === '/signup' ? 'underline font-bold' : ''} hover:bg-hover-pink hover:text-white`}
                >
                    Signup
                </NavLink>

                <NavLink
                    to="/login"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black font-marvel ${activeTab === '/login' ? 'underline font-bold' : ''} hover:bg-hover-pink hover:text-white`}
                >
                    Log in
                </NavLink>

                <NavLink
                    to="/prompt"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black ${activeTab === '/prompt' ? 'underline font-bold' : ''} hover:bg-hover-pink hover:text-white`}
                >
                    Prompts
                </NavLink>

                <NavLink
                    to="/stories"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black ${activeTab === '/stories' ? 'underline font-bold' : ''} hover:bg-hover-pink hover:text-white`}
                >
                    Stories
                </NavLink>
            </nav>
        </header>
    );
}
export default Header;