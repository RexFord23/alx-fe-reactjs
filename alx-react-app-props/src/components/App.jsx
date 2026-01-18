import WelcomeMessage from './WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';
import { useState } from 'react';
import './App.css'
import ProfilePage from './ProfilePage';


function App() {
  const userData = {name: "Jane Doe", email: "Jane.doe@example.com"};

  return  <ProfilePage userData={userData} />;
}

export default App
