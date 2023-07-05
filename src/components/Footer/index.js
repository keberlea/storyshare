import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full fixed bottom-0 bg-black text-white py-3 text-center">
            <div className="container mx-auto">
                <p className="font-bold text-lg">&copy; {new Date().getFullYear()} StoryShare. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;