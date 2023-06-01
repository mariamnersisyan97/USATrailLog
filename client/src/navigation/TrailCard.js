import React from 'react';
import { Link } from 'react-router-dom';


function TrailCard({ trail }) {
    const {name, image_url, id} = trail;
    console.log(trail)
  return (
 <div class="trail-card-minimized" >
    {/* <img src={image_url}class="card-img-top" alt="..."/> */}
    <h5 class="card-title">{name}</h5>
    <Link to={`/trails/${id}`}><button type="view">View Trail</button>
    </Link>
    </div>)

}

export default TrailCard;