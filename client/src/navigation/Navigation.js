import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { NavLink } from 'react-router-dom';

const style = {
  display: "inline-block",
  width: "90px",
  margin: "0 10px 10px",
  padding: "6px",
  color: "white",
  background: "black",
  fontSize: "15px"
};

function Navigation( ) {

const {user, setUser} = useContext(UserContext)

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok){
        setUser(null);
      }
    });
  };


  return (
    <>
    <h1>Trail Blazer</h1>
    <h1>Welcome to Trail Blazer, {user.username}!</h1>
    <div>
      <button onClick={handleLogoutClick} style={style}>Logout</button>
        <div>
        <NavLink to="/" exact  style={style}>Home</NavLink>
        <NavLink to="/new" exact style={style}>New Trail</NavLink>
        <NavLink to="/trailslist" exact style={style}>Trails</NavLink>
        <NavLink to="/userlist" exact style={style}>My List</NavLink>
        </div>
    </div>
     
  </>
    )
}

export default Navigation;