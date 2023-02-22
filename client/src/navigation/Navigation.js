import React from 'react'
import { Link } from 'react-router-dom';

function Navigation( { user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok){
        setUser(null);
      }
    });
  }
  return (
    <>
    <Link to="/">Trail Blazer</Link>
    <div>
      <button as={Link} to="/new"></button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  </>
    )
}

export default Navigation;