import React from "react";
import { useNavigate } from "react-router-dom";

/* 
To Do:
- add restriction/logic that only users who are signing in for the first time should be able to access onboarding pages
- 

*/

function Welcome() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/about");
  }
    return (
        <>
            <h1>Welcome</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                nam sit ratione recusandae<br></br> perferendis, et id magni
                odio voluptatem suscipit dolorem rerum provident<br></br>{" "}
                nesciunt maxime! Amet maiores asperiores iusto dolor.
            </p>
            <p>Page 1/3</p>
            <button type="button" onClick={handleSubmit}>Next</button>
        </>
    );
}

export default Welcome;
