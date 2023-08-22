import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Welcome() {
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
            <button type="submit">Next</button>
        </>
    );
}

export default Welcome;
