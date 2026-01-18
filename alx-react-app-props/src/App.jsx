import WelcomeMessage from '.components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';
import './App.css'
import ProfilePage from ".src/components/ProfilePage";
import UserContext from './components/UserContext';


function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
      <UserProfile name="Alice"
                   age="25"
                   bio="Loves hiking and photography"
      />
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </>
  );
}

export default App
