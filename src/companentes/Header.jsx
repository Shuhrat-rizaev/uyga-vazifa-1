import React from "react";

const Header = () => {
  return (
    <div className="container header">
      <div className="ul_div">
        <ul className="ul_header">
          <li className="li_header">Home</li>
          <li className="li_header">Breaking news</li>
          <li className="li_header">Regular news</li>
          <li className="li_header">International news</li>
          <li className="li_header">Sports</li>
          <li className="li_header">Entertainment</li>
          <li className="li_header">Culture</li>
          <li className="li_header">Arts</li>
          <li className="li_header">All news</li>
        </ul>
      </div>
      <div className="input">
        <p className="input_p">4 items found for category Entertainment</p>
      </div>
      <div className="header_futter">
        <div className="h_lift">
          <p>Sort By View:</p>
          <p className="h_p_lift">Default </p>
        </div>
        <div className="h_right">
          <button className="button">Today’s Pick</button>
          <button className="button">Trending</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
