import React from "react";
import "./index.css"; // Import the CSS file

const MyComponent = () => {
  return (
    <div className="logo-container">
      <span>Follow us on</span>
      <a href="https://www.facebook.com/">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
          alt="Facebook"
          className="logo"
        />
      </a>
      <a href="https://twitter.com/">
        <img
          src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
          alt="Twitter"
          className="logo"
        />
      </a>
      <a href="https://www.instagram.com/">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg"
          alt="Instagram"
          className="logo"
        />
      </a>
    </div>
  );
};

export default MyComponent;
