import React from 'react';
import { Link } from 'react-router-dom';


function TrailCard({ trail }) {
    const {name, image_url, id} = trail;
    console.log(trail)
  return (
 <div class="card" style={{width: '18rem'}}>
    {/* <img src={image_url}class="card-img-top" alt="..."/> */}
    <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <Link to={`/trails/${id}`}><button>View Trail</button>
    </Link>
  </div>
    </div>)

}

export default TrailCard;