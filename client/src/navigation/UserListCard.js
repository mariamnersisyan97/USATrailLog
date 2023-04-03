import React from 'react';
import { Link } from 'react-router-dom';


function UserListCard({ trail }) {

    const {name, image_url, id, description, miles} = trail;
    
  return (
   <div>
    <div class="trail">
            <h2>{name}</h2>
            <p>Description: {description}</p>
            <em>Miles: {miles}</em>
            {/* <img src={image_url}/> */}
            <div>
           <Link to={`/trails/${id}`}> <button>See Reviews</button></Link>
            </div>
          </div>
   </div>
  )
}

export default UserListCard;