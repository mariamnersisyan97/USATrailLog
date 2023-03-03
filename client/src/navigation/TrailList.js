import { UserContext } from '../context/UserContext';
import { useContext } from 'react';


function TrailList({trails, setTrails}) {

  // const {user} = useContext(UserContext)


  function handleDeleteTrail(id){
    fetch(`/trails/${id}`,{
      method: "DELETE",
    })
    onTrailDelete(id)
  }

  function onTrailDelete(id){
    const updatedTrails = trails.filter((trail) => trail.id !== id);
    setTrails(updatedTrails)
  }

  return (
    <div>{trails.length > 0 ? (
      trails.map((trail)=> (
        <div class="trail">
          <h2 key={trail.id}>{trail.name}</h2>
          <p>Description: {trail.description}</p>
          <p>Location: {trail.location}</p>
          {/* <img>{trail.image_url}</img> */}
          <em>Miles: {trail.miles}</em>
          <div>
          <button>Edit</button>
          <button onClick={(trail) => { handleDeleteTrail(trail.id)}}>Delete</button>
          </div>
        </div>
        
      ))
    ):  (
      <>
      <h2> No Trails Found </h2>
      {/* <button as={Link} to="/new">Add New Trail</button> */}
      
{/* <NewTrail user={user}/> */}
      </>
      
    )}</div>
  
  )
}

export default TrailList