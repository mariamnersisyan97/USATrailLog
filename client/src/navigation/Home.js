import React from 'react';
import { useMatch } from 'react-router-dom';
import TrailList from './TrailList';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home({states, trails}) {

  const stateList = states.map(({id, name}) => (
    <li key={id}>
      <Link to={`/states/trails/${id}`}>{name}</Link>
    </li>
  ));
  let {path} = useMatch();
  return (
    <>
    <h2>Get started by navigating to check your trails and create new ones for your personal record!</h2>
    <div>
      <ul>{stateList}</ul>
      <Routes>
        <Route exact path={path}>
          <TrailList/>
        </Route>
        <Route path={`/states/trails/:stateId`}>
          <TrailList></TrailList>
        </Route>
      </Routes>
    </div>
    </>
  )
};

export default Home;