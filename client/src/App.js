import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import NewTrail from './navigation/NewTrail';
import TrailList from './navigation/TrailList';
import Login from './navigation/Login';
import Navigation from './navigation/Navigation';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;


  return (
    <>
    <Navigation user={user} setUser={setUser} />
    <main>
      <Routes>
        <Route path="/newuser">
          <NewTrail user={user} setUser={setUser}/>
        </Route>
        <Route path="/">
          <TrailList user={user} setUser={setUser}/>
        </Route>
      </Routes>
    </main>
  </>
  );
}

export default App;
