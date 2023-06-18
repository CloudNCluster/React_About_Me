import React from "react";
import "./index.css"; // Import the CSS file
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Fab } from "@mui/material";

const SocialMediaLinks = () => {
  return (
    <div className="image-container">
      <div className="image">
        <a href="https://facebook.com">
          <Fab className="fab">
            <FacebookIcon />
          </Fab>
        </a>
      </div>
      <div className="image">
        <a href="https://twitter.com/">
          <Fab className="fab">
            <TwitterIcon />
          </Fab>
        </a>
      </div>
      <div className="image">
        <a href="https://www.instagram.com/">
          <Fab className="fab">
            <InstagramIcon />
          </Fab>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
