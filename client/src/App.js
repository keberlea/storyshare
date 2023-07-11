import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Prompt from "./components/Prompt";
import Stories from "./components/Stories";
import Story from './components/Story';
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [activeTab, setActiveTab] = useState('/home');

  return (
    <ApolloProvider client={client}>
      <Router>
        <Helmet>
          <title>StoryShare</title>
        </Helmet>
        <div className="bg-app-color min-h-screen">
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile/:userId" element={<Profile />} />  {/* Profile component can access this id using the useParams hook */}
            <Route path="/prompt" element={<Prompt />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:id" element={<Story />} />  {/* Story component can access this id using the useParams hook */}
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;