import React from 'react';

const Footer = () => {
    return (
        <footer className="px-6 py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} StoryShare. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;