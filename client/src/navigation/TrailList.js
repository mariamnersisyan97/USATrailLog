import React, { useEffect, useState } from 'react'
import NewTrail from './NewTrail';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';


function TrailList() {
  const [trails, setTrails] = useState([]);
  const {user} = useContext(UserContext)



  useEffect(() => {
    fetch(`/trails`)
      .then((r) => r.json())
      .then(setTrails);
  }, []);


  return (
    <div>{trails.length > 0 ? (
      trails.map((trail)=> (
        <div class="trail">
          <h2 key={trail.id}>{trail.name}</h2>
          <p>Description: {trail.description}</p>
          <p>Location: {trail.location}</p>
          {/* <img>{trail.image_url}</img> */}
          <em>Miles: {trail.miles}</em>
        </div>
        
      ))
    ):  (
      <>
      <h2> No Trails Found </h2>
      {/* <button as={Link} to="/new">Add New Trail</button> */}
      
<NewTrail user={user}/>
      </>
      
    )}</div>
    // <div>
    //   <h2>List of Trails</h2>
    //   <ul>{renderTrails}</ul></div>
  )
}

export default TrailList