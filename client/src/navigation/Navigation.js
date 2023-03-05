import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navigation( ) {
  // const history = useNavigate();

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
      <button onClick={handleLogoutClick}>Logout</button>
        <div>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/new" exact>New Trail</NavLink>
        <NavLink to="/trails" exact>Trails</NavLink>
        </div>
    </div>
     
  </>
    )
}

export default Navigation;