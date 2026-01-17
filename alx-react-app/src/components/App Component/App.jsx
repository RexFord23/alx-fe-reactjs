
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'

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
