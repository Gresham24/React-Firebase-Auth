import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/userdetails");
    };

  return (
      <>
          <h1>About</h1>
          <p>Page 2/3</p>
          <button type="button" onClick={handleSubmit}>
              Next
          </button>
      </>
  );
}

export default About