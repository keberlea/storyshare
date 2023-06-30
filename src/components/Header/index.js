import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';


const Header = ({ setActiveTab }) => {
    const location = useLocation();

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location, setActiveTab]);

    return (
        <header className="px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-bold" onClick={() => setActiveTab('/')}>StoryShare</NavLink>
                <nav>
                    <ul className="flex">
                        <li className="mx-3">
                            <NavLink to="/signup" onClick={() => setActiveTab('/signup')}>
                                Signup
                            </NavLink>
                        </li>
                        <li className="mx-3">
                            <NavLink to="/login" onClick={() => setActiveTab('/login')}>
                                Login
                            </NavLink>
                        </li>
                        <li className="mx-3">
                            <NavLink to="/profile" onClick={() => setActiveTab('/profile')}>
                                Profile
                            </NavLink>
                        </li>
                        <li className="mx-3">
                            <NavLink to="/stories" onClick={() => setActiveTab('/stories')}>
                                Stories
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;