import React from "react";
import logo from "../assest/images/Avatar.png";
const Navbar = () => {
  return (
    <div className="container nav">
      <div className="container">
        <button className="button">News</button>
        <button className="button">Partal</button>
      </div>
      <div className="img_header">
        <a href="https://www.youtube.com/watch?v=eGKGkftRHXQ">News</a>
        <a href="https://www.youtube.com/watch?v=l-fxH--8LFI">Blog</a>
        <img src={logo} alt="oddiy rasm" />
      </div>
    </div>
  );
};

export default Navbar;
