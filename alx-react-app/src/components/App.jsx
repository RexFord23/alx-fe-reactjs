import WelcomeMessage from './components/WelcomeMessage';
import Header from '.src/Header';
import MainContent from '.src/MainContent';
import Footer from '.src/Footer';
import { useState } from 'react';
import './App.css'


function App() {

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
    </>
  )
}

export default App
