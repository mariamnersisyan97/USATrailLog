import React from 'react';
import { useParams } from 'react-router-dom';
import AddReview from './reviews/AddReview';
import ReviewList from './reviews/ReviewList';

function TrailInfo({ user, setUser, trails, setTrails }) {

    const params = useParams();

    const additionalInfo = trails.find((trail) => parseInt(params.id) === trail.id)

function trailAdditionals() {
    if (additionalInfo){
        return (
            <div>
            <div>
                <h3>{additionalInfo['name']}</h3>
                <p>{additionalInfo['description']}</p>
                <img src={additionalInfo['image_url']} style={{ width: '540px', height: 'auto' }}/>
            </div>
            <ReviewList />
            <AddReview />
            </div>

        )
    }
    else 
    {
        return null
    }
}


  return (
    trailAdditionals()
  )
}

export default TrailInfo