import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import NewTrail from './navigation/NewTrail';
import Login from './navigation/Login';
import Navigation from './navigation/Navigation';
import Home from './navigation/Home';
import { UserContext } from './context/UserContext';
import TrailList from './navigation/TrailList';
import UserList from './navigation/UserList';
import SignUp from './navigation/SignUp';
import TrailInfo from './navigation/TrailInfo';


function App() {

  const [user, setUser] = useState(null)
  const [trails, setTrails] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/trails')
    .then((r) => {
      if (r.ok) {
        r.json().then((trail) => setTrails(trail));
      }
    });
  }, []);
  
  useEffect(() => {
    fetch('/reviews')
    .then((r) => {
      if (r.ok) {
        r.json().then((review) => setReviews(review));
      }
    });
  }, []);

  function handleUpdateTrail(updatedTrail) {
    const updatedTrails = trails.map((trail) => {
      if (trail.id === updatedTrail.id){
        return updatedTrail;
      } else {
        return trail;
      }
    });
    setTrails(updatedTrails)
  }

 const addTrail = (trail) => {
  setTrails(current => [...current, trail])
 };
  
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
    
        <Route exact path="/*" element={<Home reviews={reviews} setTrails={setTrails} trails={trails} handleDeleteTrail={handleDeleteTrail} onUpdateTrail={handleUpdateTrail}/>}/>
         <Route exact path="/new" element={<NewTrail reviews={reviews} setReviews={setReviews} trails={trails} setTrails={setTrails} user={user} setUser={setUser} addTrail={addTrail}/>} />
         <Route exact path="/trailslist" element={<TrailList trails={trails} user={user} setTrails={setTrails} handleDeleteTrail={handleDeleteTrail} onUpdateTrail={handleUpdateTrail}/> } />
         <Route exact path="/userlist" element={<UserList user={user} trails={trails}/>}/>
         <Route exact path="/signup" element={<SignUp />}/>
         <Route exact path="/login" element={<Login />} />
         <Route exact path="/trails/:id" element={<TrailInfo user={user} setUser={setUser} trails={trails}  setTrails={setTrails}  />} />

      </Routes>
    </main>
    </UserContext.Provider>
    </>   
  );
}

export default App;