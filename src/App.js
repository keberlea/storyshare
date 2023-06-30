import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Prompt from "./components/Prompt";
import Signup from "./components/Signup";
import Stories from "./components/Stories";

function App() {
  return (
    <Router>
      <Helmet>
        <title>StoryShare</title>
      </Helmet>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Routes>
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
