import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import NewTrail from './navigation/NewTrail';
import TrailList from './navigation/TrailList';
import Login from './navigation/Login';
import Navigation from './navigation/Navigation';
import Home from './navigation/Home';
import { UserContext } from './context/UserContext';


function App() {
  const [user, setUser] = useState(null);
  const [trails, setTrails] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  useEffect(() => {
    fetch('/states')
    .then((r) => {
      if (r.ok) {
        r.json().then((state) => setStates(state));
      }
    });
  }, []);
  
  function handleDeleteTrail(id){
    const updatedTrails = trails.filter((trail) => trail.id !==id);
    setTrails(updatedTrails)
  };

  if (!user) return <Login onLogin={setUser} />;


  return (
<>   
<UserContext.Provider value={{user, setUser}}>
    <Navigation />
    <main>
      <Routes>
    
        <Route exact path="/" element={<Home />}/>
         <Route exact path="/new" element={<NewTrail states={states} setStates={setStates} trails={trails} setTrails={setTrails} user={user} setUser={setUser}/>} />
         <Route exact path="/trails" element={<TrailList   trails={trails} setTrails={setTrails} handleDeleteTrail={handleDeleteTrail} /> } />
         
      </Routes>
    </main>
    </UserContext.Provider>
    </>   
  );
}

export default App;