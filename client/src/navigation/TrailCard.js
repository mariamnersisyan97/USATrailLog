import React from 'react';

function TrailCard({trail}) {
    // const [editing, setEditing] = useState(false);

    // function handleDeleteButton(id) {
    //     fetch(`trails/${id}`,{
    //         method: "DELETE",
    //     });
    //     handleDeleteTrail(trail.id)
    // }
  return (
    
    <div class="card text-center">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Title{trail.name} </h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
      2 days ago by 
    </div>
  </div>
    // name, description, location, image_url, miles, state_id
  )
}

export default TrailCard;