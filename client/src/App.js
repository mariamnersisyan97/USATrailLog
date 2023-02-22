import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, Fragment } from 'react';
import NewTrail from './navigation/NewTrail';
import TrailList from './navigation/TrailList';
import Login from './navigation/Login';
import Navigation from './navigation/Navigation';
import About from './navigation/About';

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
    <Navigation user={user} setUser={setUser} />
    <main>
      <Routes>
        {/* <Route path="/new">
          <NewTrail user={user} setUser={setUser}/>
        </Route> */}
        <Route exact path="/about" element={<About user={user} setUser={setUser}/>}/>
         <Route exact path="/new" element={<NewTrail user={user} setUser={setUser}/>} />
         <Route exact path="/trails" element={<TrailList user={user} setUser={setUser} /> } />
        {/* <Route path="/">
          <TrailList user={user} setUser={setUser}/>
        </Route> */}
      </Routes>

      
      
    </main>
  </>
  );
}

export default App;
