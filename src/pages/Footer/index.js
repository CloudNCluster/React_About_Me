import React from "react";
import "./index.css";
import SocialMediaLinks from "../Social media";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import PhoneInTalkSharpIcon from "@mui/icons-material/PhoneInTalkSharp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <p style={{ color: "grey" }}>
          CNC delivers customized IT solutions to meet the diverse needs of
          global organizations, ensuring comprehensive coverage of their unique
          requirements.
        </p>

        <SocialMediaLinks />
      </div>
      <div className="logo">
        <h2> Quick Menu </h2>
        <ul className="list">
          <li style={{ padding: "5px" }}>
            <a href="srikanth" className="list-item">
              Srikanth
            </a>
          </li>

          <li style={{ padding: "5px" }}>
            <a href="venu" className="list-item">
              Venu
            </a>
          </li>
          <li style={{ padding: "5px" }}>
            <a href="madhavi" className="list-item">
              Madhavi
            </a>
          </li>
          <li style={{ padding: "5px" }}>
            <a href="Naga" className="list-item">
              Naga
            </a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <h2 style={{ color: "white" }}> Contact </h2>

        <p style={{ color: "grey" }}>
          <LocationOnSharpIcon color="primary" fontSize="small" />
          1234 Dallas Parkway, Suite 100, Frisco, TX 75034
        </p>
      </div>
      <div className="logo">
        <p style={{ color: "grey" }}>
          <PhoneInTalkSharpIcon color="primary" /> 000000000000000
        </p>
        <p style={{ color: "grey" }}>
          <EmailSharpIcon color="primary" />
          info@cloudncluster.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
