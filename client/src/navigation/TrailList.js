import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import NewTrail from './NewTrail';


function TrailList({user}) {
  const [trails, setTrails] = useState([]);


  useEffect(() => {
    fetch("/trails")
      .then((r) => r.json())
      .then(setTrails);
  }, []);

  // useEffect(()=>{
  //   fetch("/trails")
  //   .then((r)=>{
  //     if(r.ok){r.json().then((trails)=>setTrails(trails))}
  //   })
  // }, []);

  // const renderTrails = trails.map((trail) => (
  //   <TrailCard trails={trails} trail={trail} setTrails={setTrails}/>
  // ));

  return (
    <div>{trails.length > 0 ? (
      trails.map((trail)=> (
        <div class="trail">
          <h2>{trail.name}</h2>
          <p>Description: {trail.description}</p>
          <p>Location: {trail.location}</p>
          <img>{trail.image_url}</img>
          <em>{trail.miles}</em>
          <cite>By {user.username}</cite>
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