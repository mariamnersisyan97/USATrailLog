import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Trail from './Trail';


function TrailList({trails}) {
const {user} = useContext(UserContext)
const {stateId} = useParams();

let displayTrails
if (stateId)
  {displayTrails = trails.filter(t=>t.state_id === parseInt(stateId))}
else
  {displayTrails=trails}
  // debugger;


  
  return (
   displayTrails.length === 0 ? "No Trails posted yet. Add one at the navigation!" :
   displayTrails.map((trail) => 
   (<Trail 
    trail={trail}
    key={trail.id}
   />))
  )
}

export default TrailList