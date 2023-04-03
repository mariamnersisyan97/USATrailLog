import Trail from './Trail';
import TrailCard from './TrailCard';


function TrailList({trails}) {
// console.log("trails",trails)
// const displayAllTrails = trails.map((trail) => (
//   <Trail key={trail.id} trail={trail}/>
// ));
// const handleDeleteTrail = () => {
//   console.log("deleted")
// }


return (
  <div>
    {trails.length > 0 ? trails.map((trail) => {
      return (
        <div key={trail.id}>
          <TrailCard key={trail.id} trail={trail} />
        </div>
      )
    }): null }
  </div>

)

// THIS METHOD WORKS. CONSOLE LOG RETURNS TRAILS ACCORDINGLY BUT SOMEHOW WON'T DISPLAY TRAIL CARD WHEN WE MAP OVER TRAILS AND RETURN TRAILCARD FOR EACH TRAIL.
  //   return (
  //     <div>{trails.length > 0 ? (
  //       trails.map((trail)=> (
  //         <div class="trail">
  //           <h2 key={trail.id}>{trail.name}</h2>
  //           <p>Description: {trail.description}</p>
  //           {/* <img src={trail.image_url}/> */}
  //           <em>Miles: {trail.miles}</em>
  //           <div>
  //           <button>Edit</button>
  //           <button onClick={(trail) => { handleDeleteTrail(trail.id)}}>Delete</button>
  //           </div>
  //         </div>
  
  //       ))
  //     ):  (
  //       <>
  //       <h2> No Trails Found </h2>
        
  //       </>
  
  //     )}</div>
  // )
}

export default TrailList;