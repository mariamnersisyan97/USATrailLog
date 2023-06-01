import React from 'react';
import { Route, Routes, useMatch, useParams } from 'react-router-dom';
import TrailList from './TrailList';


function Home({states, trails, setTrails, handleDeleteTrail, onUpdateTrail}) {

  // const stateList = states.map(({id, name}) => (
    
  //   <li key={id}>
  //     <Link to={`/states/trails/${id}`}>{name}</Link>
      
  //   </li>
  // ));

  // let match = useParams();
  return (
    <div className='home-trails-background'>
    <h2 className='home'>Get started by navigating to check your trails and create new ones for your personal record!</h2>
   
      
      {/* <Routes>
        <Route exact path={`${match}`} element=
          {<TrailList trails={trails}   setTrails={setTrails} handleDeleteTrail={handleDeleteTrail} onUpdateTrail={onUpdateTrail}/>} />
      
        
        <Route exact path="/states/trails/:stateId" element={<TrailList trails={trails} setTrails={setTrails} handleDeleteTrail={handleDeleteTrail} onUpdateTrail={onUpdateTrail} />} />

      </Routes> */}

      <footer> 
        <p> by Mariam Nersisyan </p>
      </footer>
    </div>

    
  )
};

export default Home;