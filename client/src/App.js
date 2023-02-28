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

  useEffect(() => {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
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
    <Navigation user={user} setUser={setUser} />
    <main>
      <Routes>
      
        <Route exact path="/home" element={<Home user={user} setUser={setUser}/>}/>
         <Route exact path="/new" element={<NewTrail  trails={trails} setTrails={setTrails} user={user} setUser={setUser}/>} />
         <Route exact path="/trails" element={<TrailList  trails={trails} setTrails={setTrails} handleDeleteTrail={handleDeleteTrail} user={user} setUser={setUser} /> } />
     
       
      </Routes>
    </main>
    </UserContext.Provider>
    </>   
  );
}

export default App;