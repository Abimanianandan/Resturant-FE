import React from "react";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <>
       <h1 className="black-lives-matter">#Thank You... </h1>   
       <div className="d-flex justify-content-center mt-5">
         <Link to={"/"} className="btn btn-primary ">Back to Home</Link>          
       </div>
    </>
  );
};

export default Thanks;
