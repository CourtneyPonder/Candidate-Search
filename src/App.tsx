import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';
import NavigationBar from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
