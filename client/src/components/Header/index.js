import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LoginModal from '../LoginModal';
import SignupModal from '../SignupModal'
import Auth from '../../utils/auth'

const ButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  font-size: 25px;
`;

const StyledButton = styled.button`
  padding: 5px 10px; // Decreased padding
  font-size: 18px; // Decreased font size
  border: none;
  border-radius: 15px; // Decreased border-radius
  transition: transform .2s;
  box-shadow: 0px 4px 10px 3px rgba(0,0,0,0.75);
  margin: 0 5px; // Decreased margin
  &:hover {
    transform: scale(1.1);
  }
  
  // Media query for smaller screens (e.g., less than 768px)
  @media (max-width: 767px) {
    font-size: 14px; // Even smaller font size for smaller screens
    padding: 2px 5px; // Even smaller padding for smaller screens
  }
`;


const StyledNavLink = styled(NavLink)`
  margin-right: 15px;
  margin-left: 15px;
  transition: transform .2s;
  box-shadow: 0px 4px 10px 3px rgba(0,0,0,0.75);
  border-radius: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Header = ({ activeTab, setActiveTab }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    const checkLoginStatus = () => {
        const loggedIn = Auth.loggedIn();
        setIsLoggedIn(loggedIn);
    };

    const handleNavigateToLogin = () => {
        setShowLogin(true);
        setShowSignup(false);
    };

    const handleNavigateToSignup = () => {
        setShowSignup(true);
        setShowLogin(false);
    };

    const onLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowLogin(false);
    };

    const onSignUpSuccess = () => {
        setIsLoggedIn(true);
        setShowSignup(false);
    };

    const handleLogout = () => {
        Auth.logout();
        setIsLoggedIn(false);
        window.location.assign('/');
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
        <header className="px-6 py-4 bg-header-blue flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white font-Licorice mb-6" id="title">
                StoryShare
            </h1>
            <nav className="text-black text-4xl flex flex-wrap justify-around">
                <StyledNavLink
                    to="/home"
                    className={`px-4 py-2 m-2 bg-yellow text-black ${activeTab === '/home' ? 'underline' : ''} `}
                >
                    Home

                </StyledNavLink>
                <ButtonContainer>
                    {isLoggedIn ? (
                        <StyledButton
                            onClick={handleLogout}
                            className="px-4 py-2 m-2 bg-pink font-bold font-marvel"
                        >
                            Logout
                        </StyledButton>
                    ) : (
                        <>
                            <StyledButton
                                onClick={handleNavigateToLogin}
                                className="px-4 py-2 m-2 bg-pink font-bold font-marvel"
                            >
                                Login
                            </StyledButton>
                            <StyledButton
                                onClick={handleNavigateToSignup}
                                className="px-4 py-2 m-2 bg-pink font-bold font-marvel"
                            >
                                Sign up
                            </StyledButton>
                        </>
                    )}
                </ButtonContainer>
                {isLoggedIn &&

                    <StyledNavLink

                        to="/profile"
                        className={`px-4 py-2 m-2 bg-yellow text-black ${activeTab === '/profile' ? 'underline' : ''} `}
                    >
                        Profile

                    </StyledNavLink>}
                {isLoggedIn &&

                    <StyledNavLink

                        to="/prompt"
                        className={`px-4 py-2 m-2 bg-yellow text-black ${activeTab === '/prompt' ? 'underline' : ''} `}
                    >
                        Prompts

                    </StyledNavLink>}
                {isLoggedIn

                    && <StyledNavLink
                        to="/stories"
                        className={`px-4 py-2 m-2 bg-yellow text-black ${activeTab === '/stories' ? 'underline' : ''} `}
                    >
                        Stories
                    </StyledNavLink>}
            </nav>
            {
                showLogin && (
                    <LoginModal
                        onClose={() => setShowLogin(false)}
                        onLoginSuccess={onLoginSuccess}
                        onNavigateToSignup={handleNavigateToSignup}
                    />
                )
            }
            {
                showSignup && (
                    <SignupModal
                        onClose={() => setShowSignup(false)}
                        onSignUpSuccess={onSignUpSuccess}
                        onNavigateToLogin={handleNavigateToLogin}
                    />
                )
            }
        </header >
    );

}

export default Header;
