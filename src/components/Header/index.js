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
            className="px-6 py-4 bg-header-blue text-black text-4xl"
        >

            <nav className="flex flex-wrap justify-around">
                <NavLink
                    to="/home"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black ${activeTab === '/home' ? 'underline font-bold' : ''} hover:bg-blue-500 hover:text-white`}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/signup"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black ${activeTab === '/signup' ? 'underline font-bold' : ''} hover:bg-blue-500 hover:text-white`}
                >
                    Signup
                </NavLink>

                <NavLink
                    to="/login"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black ${activeTab === '/login' ? 'underline font-bold' : ''} hover:bg-blue-500 hover:text-white`}
                >
                    Log in
                </NavLink>

                <NavLink
                    to="/prompt"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black ${activeTab === '/prompt' ? 'underline font-bold' : ''} hover:bg-blue-500 hover:text-white`}
                >
                    Prompts
                </NavLink>

                <NavLink
                    to="/stories"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black ${activeTab === '/stories' ? 'underline font-bold' : ''} hover:bg-blue-500 hover:text-white`}
                >
                    Stories
                </NavLink>
            </nav>
        </header>
    );
}
export default Header;



