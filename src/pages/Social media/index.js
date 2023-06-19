import React from "react";
import "./index.css"; // Import the CSS file
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Fab } from "@mui/material";

const SocialMediaLinks = () => {
  return (
    <div className="image-container">
      <div className="image">
        <a href="https://facebook.com">
          <Fab id="fab">
            <FacebookIcon />
          </Fab>
        </a>
      </div>
      <div className="image">
        <a href="https://twitter.com/">
          <Fab id="fab">
            <TwitterIcon />
          </Fab>
        </a>
      </div>
      <div className="image">
        <a href="https://www.instagram.com/">
          <Fab id="fab">
            <InstagramIcon />
          </Fab>
        </a>
      </div>
      <div className="image">
        <a href="https://www.linkedin.com/">
          <Fab id="fab">
            <LinkedInIcon />
          </Fab>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
