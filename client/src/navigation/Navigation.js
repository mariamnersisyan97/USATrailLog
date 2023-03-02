import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import TrailList from './TrailList';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navigation( ) {
  const history = useNavigate();

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
      {/* <button onClick={onBtnClick}>Add New Trail</button> */}
      {/* <Link to="/new">New Trail</Link> */}
    </div>
    
    <TrailList />
   
  </>
    )
}

export default Navigation;