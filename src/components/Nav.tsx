import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
      {/* Use Link for internal navigation */}
      <Link to="/">Home</Link>
      <Link to="/CandidateSearch">Potential Candidates</Link>
    </nav>
  )
};

export default Nav;
