import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LoginModal from '../Login';

// create your styled component
const StyledButton = styled.button`
  margin-right: 15px;
  margin-left: 15px;
  transition: transform .2s;
  box-shadow: 0px 4px 10px 3px rgba(0,0,0,0.75);
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 15px;
  margin-left: 15px;
  transition: transform .2s;
  box-shadow: 0px 4px 10px 3px rgba(0,0,0,0.75);
  &:hover {
    transform: scale(1.1);
  }
`;

const Header = ({ activeTab, setActiveTab }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    // Assume we have a function that can check login status
    const checkLoginStatus = async () => {
        // Replace this with your actual function that checks the login status from the server
        const loggedIn = Math.random() > 0.5; // This will randomly return true or false for now
        setIsLoggedIn(loggedIn);
    };

    useEffect(() => {
        checkLoginStatus();
        const pathname = location.pathname.endsWith('/')
            ? location.pathname.slice(0, -1)
            : location.pathname;

        const currentTab = pathname === '' ? '/home' : pathname;
        setActiveTab(currentTab);
    }, [location, setActiveTab]);

    return (
        <header
            className="px-6 py-4 bg-header-blue flex flex-col items-center justify-center"
        >
            <h1 className="text-5xl text-white font-Licorice mb-6" id="title">
                StoryShare
            </h1>

            <nav className="text-black text-4xl flex flex-wrap justify-around">
                <StyledNavLink
                    to="/home"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black font-marvel ${activeTab === '/home' ? 'underline' : ''} `}
                >
                    Home
                </StyledNavLink>

                <StyledNavLink
                    to="/signup"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black font-marvel ${activeTab === '/signup' ? 'underline' : ''} `}
                >
                    Signup
                </StyledNavLink>

                {!isLoggedIn && (
                    <StyledButton
                        onClick={() => setShowLogin(true)}
                        className="px-4 py-2 m-2 bg-button-yellow text-black font-marvel"
                    >
                        Log in
                    </StyledButton>
                )}

                {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

                <StyledNavLink
                    to="/prompt"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black ${activeTab === '/prompt' ? 'underline' : ''} `}
                >
                    Prompts
                </StyledNavLink>

                <StyledNavLink
                    to="/stories"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black ${activeTab === '/stories' ? 'underline' : ''} `}
                >
                    Stories
                </StyledNavLink>
            </nav>
        </header>
    );
}

export default Header;
