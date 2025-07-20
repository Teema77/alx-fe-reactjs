/*import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <>
      <WelcomeMessage />
    </>
  );
}

export default App;*/

/*import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;*/

/*import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
    </>
  );
}

export default App;*/

import ProfilePage from './ProfilePage';
import UserContext from './UserContext';


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
    

  );
}

export default App;



