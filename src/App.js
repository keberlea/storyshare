import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Prompt from "./components/Prompt";
import Signup from "./components/Signup";
import Stories from "./components/Stories";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const App = () => {
    const [activeTab, setActiveTab] = useState('/');

    return (
      <Router>
        <Helmet>
          <title>StoryShare</title>
        </Helmet>
        <div className="min-h-screen">
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          <Routes>
            <Route path="/" element={<Prompt />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:id" element={<Story />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
