// import './App.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './navigation/Login';
import { useState, useEffect } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import NewTrail from './navigation/NewTrail';
import TrailList from './navigation/TrailList';



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;


  return (
    <>
    <NavBar user={user} setUser={setUser} />
    <main>
      <Routes>
        <Route path="/newuser">
          <NewTrail user={user} />
        </Route>
        <Route path="/">
          <TrailList />
        </Route>
      </Routes>
    </main>
  </>
  );
}

export default App;
