import React from 'react'
import { Link } from 'react-router-dom';
import Registration from '../auth/Registration';

function Homepage() {
  return (
      <>
          <h1>Homepage</h1>
          <Link to="/registration">Register Account</Link>
          <br></br>
          <Link to="/SignIn">Sign in</Link>
      </>
  );
}

export default Homepage