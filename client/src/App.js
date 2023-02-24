import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from 'react';
import NewTrail from './navigation/NewTrail';
import TrailList from './navigation/TrailList';
import Login from './navigation/Login';
import Navigation from './navigation/Navigation';
import About from './navigation/About';
import { UserContext } from './context/UserContext';


function App() {
  const [user, setUser] = useState(null);
  // const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // auto-login
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;


  return (
<>   
<UserContext.Provider value={{user, setUser}}>
    <Navigation user={user} setUser={setUser} />
    <main>
      <Routes>
      
        <Route exact path="/about" element={<About user={user} setUser={setUser}/>}/>
         <Route exact path="/new" element={<NewTrail user={user} setUser={setUser}/>} />
         <Route exact path="/trails" element={<TrailList user={user} setUser={setUser} /> } />
       
      </Routes>
    </main>
    </UserContext.Provider>
    </>   
  );
}

export default App;