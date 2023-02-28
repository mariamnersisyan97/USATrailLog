import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import TrailCard from './TrailCard';
import TrailList from './TrailList';

function Navigation( ) {

const {user, setUser} = useContext(UserContext)

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok){
        setUser(null);
      }
    });
  }
  return (
    <>
    <h1>Trail Blazer</h1>
    <h1>Welcome to Trail Blazer, {user.username}!</h1>
    <div>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
    <TrailList />
   
  </>
    )
}

export default Navigation;