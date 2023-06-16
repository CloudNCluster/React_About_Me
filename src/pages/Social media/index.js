import React from "react";
import "./index.css"; // Import the CSS file
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaLinks = () => {
  return (
    <div className="image-container">
      <span>Follow us on</span>
      <a href="https://www.facebook.com/">
      <FacebookIcon/>
      </a>
      <a href="https://twitter.com/">
      <TwitterIcon/>
      </a>
      <a href="https://www.instagram.com/">
      <InstagramIcon/>
      </a>
    </div>
  );
};

export default SocialMediaLinks;
