import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

function Navigation( { setUser, UserContext }) {
  const { user } = useContext(UserContext);
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
    <h1>Welcome to Trail Blazer! {user.username}</h1>
    <div>
      <button as={Link} to="/new">Add New Trail</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  </>
    )
}

export default Navigation;