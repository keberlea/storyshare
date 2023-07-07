import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Prompt from "./components/Prompt";
import Signup from "./components/Signup";
import Stories from "./components/Stories";
import Story from './components/Story';
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

const App = () => {
  const [activeTab, setActiveTab] = useState('/home');

  return (
    <Router>
      <Helmet>
        <title>StoryShare</title>
      </Helmet>
      <div className="bg-app-color min-h-screen">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<Profile />} />  {/* Profile component can access this id using the useParams hook */}
          <Route path="/prompt" element={<Prompt />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:id" element={<Story />} />  {/* Story component can access this id using the useParams hook */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;