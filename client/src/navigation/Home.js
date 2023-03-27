import React from 'react';
import { Route, useMatch, useParams } from 'react-router-dom';


function Home({states, trails, setTrails, handleDeleteTrail, onUpdateTrail}) {

  // const stateList = states.map(({id, name}) => (
    
  //   <li key={id}>
  //     <Link to={`/states/trails/${id}`}>{name}</Link>
      
  //   </li>
  // ));

  let match = useParams();
  return (
    <>
    <h2>Get started by navigating to check your trails and create new ones for your personal record!</h2>
    <div>
      
      {/* <Routes>
        <Route exact path={`${match}`} element=
          {<TrailList trails={trails}   setTrails={setTrails} handleDeleteTrail={handleDeleteTrail} onUpdateTrail={onUpdateTrail}/>} />
      
        
        <Route exact path="/states/trails/:stateId" element={<TrailList trails={trails} setTrails={setTrails} handleDeleteTrail={handleDeleteTrail} onUpdateTrail={onUpdateTrail} />} />

      </Routes> */}
    </div>

    </>
  )
};

export default Home;