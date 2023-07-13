import './App.css';
import React, { useState } from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Prompt from "./components/Prompt";
import Stories from "./components/Stories";
import Story from './components/Story';
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:3001/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
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
            <Route path="/profile" element={<Profile />} />  {/* Profile component can access this id using the useParams hook */}
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