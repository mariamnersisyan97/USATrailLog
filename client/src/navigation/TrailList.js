import Trail from './Trail';


function TrailList({trails}) {

const displayAllTrails = trails.map((trail) => (
  <Trail key={trail.id} trail={trail}/>
));
const handleDeleteTrail = () => {
  console.log("deleted")
}


    return (
      <div>{trails.length > 0 ? (
        trails.map((trail)=> (
          <div class="trail">
            <h2 key={trail.id}>{trail.name}</h2>
            <p>Description: {trail.description}</p>
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

export default TrailList;