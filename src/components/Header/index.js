import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// create your styled component
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
<<<<<<< HEAD
            className="px-1 py-4 bg-header-blue text-black text-4xl"
        >
            <div className="flex justify-center text-8xl mb-6 font-licorice text-inside text-black-stroke">
                StoryShare
            </div>
            <nav className="flex flex-wrap justify-around">
                <StyledNavLink
=======
            className="px-6 py-4 bg-header-blue flex flex-col items-center justify-center"
        >
            <h1 className="text-5xl text-white font-Licorice mb-6" id="title">StoryShare</h1>
            
            <nav className="text-black text-4xl flex flex-wrap justify-around">
                <NavLink
>>>>>>> aa27c20256cd781b1e8cc414bc3f9e89e16183c6
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

                <StyledNavLink
                    to="/login"
                    className={`px-4 py-2 m-2 bg-button-yellow text-black font-marvel ${activeTab === '/login' ? 'underline' : ''} `}
                >
                    Log in
                </StyledNavLink>

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