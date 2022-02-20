import React from "react";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const handleClick = (e) => {
    console.log(e.target.name);
  };
  return (
    <div>
      <button onClick={handleClick} name="login">
        Login
      </button>
      <button onClick={handleClick} name="video">
        Video
      </button>
      <button onClick={handleClick} name="date">
        Date
      </button>
    </div>
  );
};

export default Homepage;
