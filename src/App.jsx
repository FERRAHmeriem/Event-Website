import Home from "./Pages/Home"
import { Routes , Route } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import { useState } from 'react'
import Login from "./Pages/Login"
import Admin from "./Pages/Admin";
import Footer from "./Components/Footer";
import Categories from "./Components/Categories"
import Notfound from "./Pages/notfound"
import { ProfileImageProvider } from "./Components/ProfileImageContext"
import Profile from "./Pages/Profile";
import CreateEvent from "./Pages/CreateEvent";
import EventPage from './Pages/EventPage';
import EditEvent from './Pages/EditEvent';
import EditProfile from "./Pages/EditProfile";
import UserProfile from "./Pages/UserProfile";
const FirstPage = ({isLoggedIn}) => {
  return (
      <div>
        <Home isLoggedIn={isLoggedIn} />
        <Categories isLoggedIn={isLoggedIn}/>
        <Footer isLoggedIn={isLoggedIn}/>
      </div>
  );
};
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  return <>
  <ProfileImageProvider>
  <Routes>
  {isAdmin ? (
            <Route path="/Admin" element={<Admin/>} />
          ) : (
            <>
        <Route path="/" element={<FirstPage isLoggedIn={isLoggedIn }  />} />
        <Route path="/Explore" element={<SignUp/>} />
        <Route path="/Contact" element={<SignUp/>} />
        <Route path="/About" element={<SignUp/>} />
        <Route path="/FAQ" element={<SignUp />} />
        <Route path="/TermOfUse" element={<SignUp/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/EditEvent/:id" element={<EditEvent />} />
        <Route path="/CreateEvent" element={<CreateEvent />} />
        <Route path="/EventPage/:id" element={<EventPage />} />
        <Route path="/UserProfile/:id" element={<UserProfile />} />
        <Route path="/EditProfile/:id" element={<EditProfile />} />
        <Route path="/*" element={<Notfound/>}/>
        </>
          )}
  </Routes>
  </ProfileImageProvider>
  </>

}

export default App
